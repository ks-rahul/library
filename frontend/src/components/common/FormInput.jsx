import { Fragment } from "react";

import FormErrorComponent from "./ErrorMessage";

function FormInput({
  label,
  inputId,
  name,
  value,
  errorMessage,
  onChange,
  onBlur,
  divId = "",
  inputClassName = "",
  labelClassName = "",
  divClassName = "",
  type = "text",
  required = false,
  autofocus = false,
}) {
  return (
    <Fragment>
      <div className={`form-group w-100 ${divClassName}`} id={divId}>
        <label
          for={inputId}
          className={`col-form-label text-md-start ${labelClassName}`}
        >
          {label}
          {required ? <span className="mandatory text-danger">*</span> : ""}
        </label>

        <div className="w-100">
          <input
            id={inputId}
            type={type}
            className={`form-control ${inputClassName}`}
            name={name}
            value={value}
            autocomplete={name}
            autofocus={autofocus}
            onChange={onChange}
            onBlur={onBlur}
          />

          {required ? <FormErrorComponent errorMessage={errorMessage} /> : ""}
        </div>
      </div>
    </Fragment>
  );
}

export default FormInput;
