
function emailValid(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email == "") {
    return true;
  }
  if (!String(email).toLowerCase().match(emailRegex)) {
    return true;
  }
}

module.exports = emailValid;
