let pattern = {
  email:
    /[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9-]*[a-zA-Z0-9])?/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*]).{8,}$/,
  number: /^[0-9]*$/,
  name: /^[a-zA-Z][a-zA-Z. ]+$/,
  // eslint-disable-next-line
  url: /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,
  // eslint-disable-next-line
  facebook: /^(http(s)?:\/\/)?(www\.)?facebook.com\/[a-zA-Z0-9(\.\?)?]/,
  // eslint-disable-next-line
  twitter: new RegExp("^(?:http(s)://)?(?:www\\.)?twitter\\.com/(\\w+)$", "i"),
  // eslint-disable-next-line
  linkedin: new RegExp(
    "^(?:http(s)://)?(?:www\\.)?linkedin\\.com/(\\w+)$",
    "i"
  ),
  // eslint-disable-next-line
  instagram: new RegExp(
    "^(?:http(s)://)?(?:www\\.)?instagram\\.com/(\\w+)$",
    "i"
  ),
  // eslint-disable-next-line
  pinterest: new RegExp(
    "^(?:http(s)://)?(?:www\\.)?pinterest\\.com/(\\w+)$",
    "i"
  ),
};
function validateField(fielddata) {
  let validationVarify = false;
  let validationMsg = "";
  for (let i = 0; i < fielddata.validation.length; i++) {
    let valName = Object.keys(fielddata.validation[i]);
    let valValue = fielddata.validation[i][valName[0]];
    switch (valName[0]) {
      case "required":
        validationVarify = checkRequired(fielddata.value);
        if (validationVarify) {
          validationMsg = `${fielddata.name} is required`;
        }
        break;
      case "maxLength":
        validationVarify = checkMaxLength(fielddata.value, valValue);
        validationMsg = validationVarify
          ? `Maximum length can be ${valValue}`
          : "";
        break;
      case "minLength":
        validationVarify = checkMinLength(fielddata.value, valValue);
        validationMsg = validationVarify
          ? `Minimum length should be ${valValue}`
          : "";
        break;
      case "pattern":
        validationVarify = checkPattern(fielddata.value, fielddata.type);
        let ispassword = fielddata.name;
        validationMsg = validationVarify
          ? `Enter valid ${
              ispassword.toLowerCase() === "password"
                ? "Password. Password Should be like Abc@12345"
                : fielddata.name
            }`
          : "";
        break;
      case "match":
        validationVarify = matchPass(fielddata.value, valValue);
        validationMsg = validationVarify
          ? "Confirm password should be same as new password."
          : "";
        break;
      case "price":
        validationVarify = validatePrice(fielddata.value);
        validationMsg = validationVarify ? "Enter valid price." : "";
        break;
      case "priceMatch":
        validationVarify = comparePrice(fielddata.value, valValue);
        validationMsg = validationVarify
          ? "Selling price should be less then actual price."
          : "";
        break;
      case "ccExpiry":
        validationVarify = checkExpiry(fielddata.value);
        validationMsg = validationVarify
          ? `Please enter valid ${fielddata.name}`
          : "";
        break;
      default:
        validationVarify = false;
        validationMsg = "";
        break;
    }
    if (validationVarify) {
      break;
    }
  }
  return { validationVarify, validationMsg };
}

function checkRequired(value) {
  value = `${value}`;
  if (value) {
    return false;
  } else {
    return true;
  }
}

function checkMaxLength(value, length) {
  let string = `${value}`;
  if (string && string.length > length) {
    return true;
  } else {
    return false;
  }
}

function checkMinLength(value, length) {
  let string = `${value}`;
  if (string && string.length < length) {
    return true;
  } else {
    return false;
  }
}

function checkPattern(value, typeName) {
  let string = `${value}`;
  if (string.match(pattern[typeName]) || !string) {
    return false;
  } else {
    return true;
  }
}

function matchPass(cPass, pass) {
  if (cPass === pass) {
    return false;
  } else {
    return true;
  }
}

function validatePrice(value) {
  if (value && isNaN(value)) {
    return true;
  } else {
    return false;
  }
}

function comparePrice(value, cPrice) {
  if (parseInt(value) > parseInt(cPrice)) {
    return true;
  } else {
    return false;
  }
}

function checkExpiry(value) {
  let data = value.split("/");
  const date = new Date();
  const month = date.getMonth();
  const years = `${date.getFullYear()}`.substr(2);
  const year = parseFloat(years);
  if (
    data[0] < 1 ||
    data[0] > 12 ||
    data[1] > year + 10 ||
    data[1] < year ||
    (data[0] === month && data[1] < year)
  ) {
    return true;
  }
  if (
    data[0].length !== 2 ||
    isNaN(data[0]) ||
    data.length !== 2 ||
    data[0] > 12
  ) {
    return true;
  } else if (data[1].length !== 2 || isNaN(data[1])) {
    return true;
  } else {
    return false;
  }
}

function setValue(e, type) {
  if (type === "checkbox") {
    return e.target.checked;
  } else if (type === "editor") {
    return e.editor.getData();
  } else if (type === "emaileditor") {
    return e;
  } else if (type === "file") {
    return e.target.files[0];
  } else if (type === "datepicker") {
    if (Object.prototype.toString.call(new Date(e)) === "[object Date]") {
      return e;
    } else {
      return "";
    }
  } else if (type === "multiSelect") {
    return e;
  } else {
    return e.target.value;
  }
}

function validateAllFields(formData) {
  let fields = Object.keys(formData);
  let errors = {};
  let validated = true;
  for (let i = 0; i < fields.length; i++) {
    let checkFields = validateField(formData[fields[i]]);
    if (checkFields.validationVarify) {
      validated = false;
    }
    errors[fields[i]] = checkFields.validationMsg;
  }
  return { validated, errors };
}

function onlyNumberWithMaxLimit(e, field) {
  const value = e.target.value;
  const splitValue = value.split("");
  let maxLength = 0;
  for (let i = 0; i < field.validation.length; i++) {
    const key = Object.keys(field.validation[i]);
    if (key[0] === "maxLength") {
      maxLength = field.validation[i][key[0]];
    }
  }
  let newValue = "";
  for (let i = 0; i < splitValue.length; i++) {
    if (!isNaN(splitValue[i])) {
      newValue = newValue + splitValue[i];
    }
    if (newValue.length === maxLength) {
      break;
    }
  }
  return newValue;
}

function ccExpiryFormat(e) {
  const value = e.target.value;
  const splitValue = value.split("");
  let newValue = "";
  for (let i = 0; i < splitValue.length; i++) {
    if (newValue.length === 2) {
      newValue = `${newValue}/`;
    }
    if (!isNaN(splitValue[i])) {
      newValue = `${newValue}${splitValue[i]}`;
    }
    if (newValue.length === 7) {
      break;
    }
  }
  return newValue;
}

export {
  validateField,
  setValue,
  validateAllFields,
  onlyNumberWithMaxLimit,
  ccExpiryFormat,
};
