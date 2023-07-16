function authenticate(login, password) {
  if (login === "login" && password === "password") {
    return "You Are Logged In";
  } else {
    return "Login is not correct";
  }
}
