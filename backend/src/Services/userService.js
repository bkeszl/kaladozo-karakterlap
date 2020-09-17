const { models } = require('../Sequelize');
const encryptService = require('./encryptService');
const tokenService = require('./tokenService');

async function createUser(userInput) {
   let createdUser = await models.user.create(userInput);
   return createdUser;
}

async function validateUser(userInput){
  const {username, password, email} = userInput;
  let missingParams = [];
  if(username === undefined) {
    missingParams.push("username");
  }
  if(password === undefined) {
    missingParams.push("password");
  }
  if(email === undefined) {
    missingParams.push("e-mail");
  }
  if(missingParams.length > 0){
    return {status: missingParams + " fields are missing!", code: 400};
  }
  if (password.length < 6) {
    return {status: "Password must be longer than 6 characters!", code: 400};
  }
  if (username.length < 6) {
    return {status: "Username must be longer than 6 characters!", code: 400};
  }
  let checkUsername = await models.user.findAll({
    where: {
      username: username
    }
  });
  if (checkUsername.length > 0){
    return {status: "Username already exists!", code: 409};
  }
  let checkEmail = await models.user.findAll({
    where: {
      email: email
    }
  });
  if (checkEmail.length > 0){
    return {status: "E-mail already exists!", code: 409};
  }
  return {status: "OK", code: 200};
  //todo: email regex?
}

async function verifyUser(verifyId) {
  let userToVerify = await models.user.findAll({
    where: {
      verificationId: verifyId
    }
  });
  if (userToVerify.length === 0) {
    return {code: 404, status: "We don't have an account connecting to this link."};
  }
  userToVerify[0].verified = true;
  userToVerify[0].save();
  return {code: 200, status: "OK"}
}

async function loginUser(userCredentials) {
  let userToLogin = await models.user.findAll({
    where: {
      username: userCredentials.username
    }
  });
  if (userToLogin.length === 0) {
    return {code: 401, status: "The provided credentials don't match our records!"}
  }

  if(userToLogin[0].verified === false){
    return {code: 401, status: "This account is not verified!"}

  }
  
  let isCorrectPassword = await encryptService.comparePasswords(userCredentials.password, userToLogin[0].password);
  if (isCorrectPassword) {
    return {code: 200, status: await tokenService.generateToken({username: userToLogin.username})}
  } else {
    return {code: 401, status: "The provided credentials don't match our records!"}
  }
}

module.exports = {
  createUser,
  validateUser,
  verifyUser,
  loginUser
}
