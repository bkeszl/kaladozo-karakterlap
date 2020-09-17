function validateTrial(trial) {
  const trials = ["elme", "érzékek", "fizikum", "jellem", "ösztön", "ügyesség"];
  if(trials.includes(trial)){
    return true;
  } else {
    return false
  }
}

module.exports = {
  validateTrial
}