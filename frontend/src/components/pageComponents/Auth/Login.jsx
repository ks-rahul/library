import { Fragment } from "react";
import { Link } from "react-router-dom";

import Alert from "../../common/Alert";
import FormInput from "../../common/FormInput";

function Login() {
  return (
    <Fragment>
      <div className="tg-sectionspace tg-haslayout login-page">
        <div className="container">
          <div className="row no-gutters">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 mb-4">
              <Alert />
            </div>
            <div className="panel panel-default login-card loginInfo">
              <div className="tg-contactus panel-body p-0 h-100">
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 h-100">
                  <div className="form-container">
                    <div className="tg-sectionhead text-center">
                      <h2 className="d-block w-100"> Login</h2>
                    </div>
                    <form
                      id="user-login"
                      className="tg-formtheme tg-formcontactus"
                    >
                      <FormInput
                        label="Username or Email"
                        inputId="username"
                        required
                      />
                      <FormInput
                        label="Password"
                        type="Password"
                        inputId="password"
                        required
                      />

                      <div className="form-group w-100">
                        <Link className="btn btn-link" to="/">
                          Forgot Your Password?
                        </Link>
                      </div>
                      <div className="form-group w-100">
                        <div className="form-check">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name="remember"
                            id="remember"
                          />
                          <label
                            className="form-check-label"
                            htmlFor="remember"
                          >
                            Remember Me
                          </label>
                        </div>
                      </div>
                      <div className="form-group text-center w-100">
                        <button type="submit" className="btn btn-primary">
                          Login
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 p-0 h-100">
                  <div className="image-container">
                    <figure>
                      <img
                        src="/images/login.jpg"
                        alt="login page"
                        className="img-responsive"
                      />
                    </figure>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;
