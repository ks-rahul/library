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
  showDefault = true,
  options = [],
  defaultSelectText = "Select",
  defaultSelectValue = "",
  divId = "",
  inputClassName = "",
  labelClassName = "",
  divClassName = "",
  type = "text",
  required = false,
  autofocus = false,
}) {
  const onShowHideClick = (ev) => {
    ev.preventDefault();
    ev.stopPropagation();

    const showIcon = document.getElementById(inputId + "_show_eye");
    const hideIcon = document.getElementById(inputId + "_hide_eye");
    const input = document.getElementById(inputId);

    if (input.type?.toLowerCase() === "password") {
      input.type = "text";
      hideIcon.style.display = "block";
      showIcon.style.display = "none";
    } else {
      input.type = "password";
      hideIcon.style.display = "none";
      showIcon.style.display = "block";
    }
  };

  return (
    <Fragment>
      <div className={`form-group w-100 ${divClassName}`} id={divId}>
        <label
          htmlFor={inputId}
          className={`col-form-label text-md-start ${labelClassName}`}
        >
          {label}
          {required ? <span className="mandatory text-danger">*</span> : ""}
        </label>

        <div className="w-100">
          {type?.toLowerCase() === "password" ? (
            <div className="d-flex">
              <input
                id={inputId}
                type={type}
                className={`input radius-input form-control ${inputClassName}`}
                name={name}
                value={value}
                autoComplete={name}
                autoFocus={autofocus}
                onChange={onChange}
                onBlur={onBlur}
              />
              <div className="input-group-append radius-btn">
                <span
                  className="input-group-text d-flex h-100 justify-content-center align-items-center radius-btn"
                  onClick={onShowHideClick}
                >
                  <i className="fa fa-eye f1x" id={inputId + "_show_eye"}></i>
                  <i
                    className="fa fa-eye-slash f1x"
                    style={{ display: "none" }}
                    id={inputId + "_hide_eye"}
                  ></i>
                </span>
              </div>
            </div>
          ) : type?.toLowerCase() === "select" ? (
            <select
              id={inputId}
              className={`form-control ${inputClassName}`}
              name={name}
              value={value}
              autoComplete={name}
              autoFocus={autofocus}
              onChange={onChange}
              onBlur={onBlur}
            >
              {showDefault ? (
                <option value={defaultSelectValue}>{defaultSelectText}</option>
              ) : (
                ""
              )}
              {options.map((op, idx) => (
                <option value={op.id} key={idx + "_" + op.id}>
                  {op.name}
                </option>
              ))}
            </select>
          ) : (
            <input
              id={inputId}
              type={type}
              className={`form-control ${inputClassName}`}
              name={name}
              value={value}
              autoComplete={name}
              autoFocus={autofocus}
              onChange={onChange}
              onBlur={onBlur}
            />
          )}

          {required ? <FormErrorComponent errorMessage={errorMessage} /> : ""}
        </div>
      </div>
    </Fragment>
  );
}

export default FormInput;
