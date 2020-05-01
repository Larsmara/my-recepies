const isEmpty = (string) => {
  if (string.trim() === "") return true;
  else return false;
};
const isEmail = (email) => {
  const regEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(regEx)) return true;
  else return false;
};

exports.validateSignupData = (data) => {
  let errors = {};

  if (isEmpty(data.email)) {
    errors.email = "Must not be empty";
  } else if (!isEmail(data.email)) {
    errors.email = "Must be a valid email";
  }

  if (isEmpty(data.password)) errors.password = "Must not be empty";
  if (data.password !== data.confirmPassword) errors.confirmPassword = "Passwords must match";
  if (isEmpty(data.username)) errors.username = "Must not be empty";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

exports.validateLoginData = (data) => {
  let errors = {};
  if (isEmpty(data.email)) errors.email = "Must not be empty";
  if (isEmpty(data.password)) errors.password = "Must not be empty";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

exports.reduceUserDetails = (data) => {
  let userDetails = {};

  if (!isEmpty(data.bio.trim())) userDetails.bio = data.bio;
  if (!isEmpty(data.age.trim())) userDetails.age = data.age;
  if (!isEmpty(data.location.trim())) userDetails.location = data.location;

  return userDetails;
};

exports.validateRecipeData = (data) => {
  let errors = {};

  if (isEmpty(data.name)) errors.name = "Cannot be empty";
  if (isEmpty(data.calories)) errors.calories = "Cannot be empty";
  if (isEmpty(data.carbs)) errors.carbs = "Cannot be empty";
  if (isEmpty(data.protein)) errors.protein = "Cannot be empty";
  if (isEmpty(data.fat)) errors.fat = "Cannot be empty";
  if (isEmpty(data.description)) errors.description = "Cannot be empty";

  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};
