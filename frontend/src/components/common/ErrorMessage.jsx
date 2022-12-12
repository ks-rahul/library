import { Fragment } from "react";

function FormErrorComponent({ errorMessage }) {
  return (
    <Fragment>
      <span className="invalid-feedback" role="alert">
        <strong>{errorMessage}</strong>
      </span>
    </Fragment>
  );
}

export default FormErrorComponent;
