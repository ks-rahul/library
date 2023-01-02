module.exports.signupRules = {
  email: "required|string|email",
  phone_no: "required|string",
  password: "required|string",
  community: "required|string",
  flat_no: "required|string",
  first_name: "required|string",
  last_name: "required|string",
  city: "required|string",
  state: "required|string",
};

module.exports.signinRules = {
  email: "required|string|email",
  password: "required|string",
};
