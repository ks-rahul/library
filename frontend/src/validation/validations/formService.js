import {
  setValue,
  validateAllFields,
  onlyNumberWithMaxLimit,
} from "./validationService";

function changeHandler(e, name, form) {
  let fieldValue = form[name]["value"];
  form[name]["value"] = setValue(e, form[name]["type"]);
  if (form[name].type === "number") {
    form[name]["value"] = onlyNumberWithMaxLimit(e, form[name]);
  } else if (form[name].type === "datepicker") {
    if (!form[name]["value"]) {
      form[name]["value"] = fieldValue;
    }
  }
  if (form[name].hasOwnProperty("dependency")) {
    for (let i = 0; i < form[name].dependency.length; i++) {
      let depndentField = form[name].dependency[i].depValue;
      let validationName = form[name].dependency[i].key;
      for (let j = 0; j < form[depndentField].validation.length; j++) {
        let key = Object.keys(form[depndentField].validation[j]);
        if (key.indexOf(validationName) > -1) {
          form[depndentField].validation[j][validationName] =
            form[name]["value"];
        }
      }
    }
  }
  let isFormValid = validateAllFields(form);
  let fields = Object.keys(form);
  for (let i = 0; i < fields.length; i++) {
    form[fields[i]].error = isFormValid.errors[fields[i]];
  }
  return form;
}

function blurHandler(name, form) {
  form[name]["touched"] = true;
  return form;
}

function submitFormError(form) {
  let isFormValid = validateAllFields(form);
  let fields = Object.keys(form);
  for (let i = 0; i < fields.length; i++) {
    form[fields[i]].error = isFormValid.errors[fields[i]];
    form[fields[i]].touched = true;
  }
  let validated = isFormValid.validated;
  return { validated, form };
}

function setDataInForm(form, record) {
  let keys = Object.keys(form);
  for (let i = 0; i < keys.length; i++) {
    if (record.hasOwnProperty(`${keys[i]}`) && `${record[keys[i]]}`) {
      form[keys[i]].value = record[keys[i]] ? record[keys[i]] : "";
    }
    if (
      form[keys[i]].type === "radio" &&
      `${record[keys[i]]}` &&
      record[keys[i]] !== null
    ) {
      form[keys[i]].value = `${record[keys[i]]}`;
    }
  }
  return form;
}

export { changeHandler, blurHandler, submitFormError, setDataInForm };
