import { useEffect, useState, Fragment } from "react";

function Alert({ message, active = false, type = "success" }) {
  const [show, setShow] = useState(active);

  useEffect(() => setShow(active), [active]);

  return (
    <Fragment>
      {show ? (
        <div class={`alert alert-${type} alert-dismissible show`} role="alert">
          <strong>{message}</strong>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
            onClick={() => setShow(false)}
          ></button>
        </div>
      ) : (
        ""
      )}
    </Fragment>
  );
}

export default Alert;
