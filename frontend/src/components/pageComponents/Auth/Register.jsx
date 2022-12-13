import { Fragment } from "react";
import { Link } from "react-router-dom";

import Alert from "../../common/Alert";
import FormInput from "../../common/FormInput";

function Register() {
  return (
    <Fragment>
      <div className="tg-sectionspace tg-haslayout">
        <div className="container">
          <div className="row">
            <div
              className="panel panel-default login-card m-0 p-0"
              style={{ maxWidth: "100%" }}
            >
              <div className="tg-contactus panel-body h-m-auto p-0">
                <div className="col-xs-12 col-sm-12 col-md-5 h-m-auto p-0 mb-hide">
                  <div className="registration-image-box">
                    <figure>
                      <img
                        src="/images/registration-page.jpg"
                        alt="side-image"
                      />
                    </figure>
                  </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-7 h-m-auto">
                  <div className="tg-sectionhead text-center pb-1 border-0">
                    <h2 className="d-block w-100 pt-5">Signup</h2>
                  </div>

                  <form method="POST" id="user-register" className="pb-4">
                    <fieldset className="fieldset form-group">
                      <legend className="small font-16">
                        Account Information
                      </legend>
                      <div className="row">
                        <div className="col-md-6">
                          <FormInput
                            type="select"
                            label="Community"
                            inputId="community"
                            options={[]}
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <FormInput
                            label="Flat No / Address"
                            inputId="address_1"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <FormInput
                            label="Email Address"
                            inputId="email"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <FormInput
                            type="Password"
                            label="Password"
                            inputId="password"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <FormInput
                            type="Password"
                            label="Confirm Password"
                            inputId="password-confirm"
                            required
                          />
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="fieldset form-group">
                      <legend className="small font-16">
                        Basic Information
                      </legend>
                      <div className="row">
                        <div className="col-md-6">
                          <FormInput
                            label="First Name"
                            inputId="first_name"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <FormInput
                            label="Last Name"
                            inputId="last_name"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <FormInput
                            label="Phone No"
                            inputId="phone_no"
                            type="tel"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <FormInput
                            label="Whatsapp No"
                            inputId="whatsapp_no"
                            type="tel"
                          />
                        </div>
                      </div>
                    </fieldset>

                    <fieldset className="fieldset form-group">
                      <legend className="small font-16">
                        Others Information
                      </legend>
                      <div className="row">
                        <div className="col-md-6">
                          <FormInput
                            label="Flat No"
                            inputId="flat_no"
                            required
                          />
                        </div>

                        <div className="col-md-6">
                          <FormInput
                            label="Address Line 2"
                            inputId="address_2"
                          />
                        </div>
                        <div className="col-md-6">
                          <FormInput label="City" inputId="city" />
                        </div>
                        <div className="col-md-6">
                          <FormInput
                            label="District"
                            inputId="district"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <FormInput label="State" inputId="state" />
                        </div>

                        <div className="col-md-6">
                          <FormInput
                            label="Country"
                            inputId="country"
                            required
                          />
                        </div>
                        <div className="col-md-6">
                          <FormInput
                            label="Pincode"
                            inputId="pincode"
                            required
                          />
                        </div>
                      </div>
                    </fieldset>

                    <div className="row mb-0">
                      <div className="col-md-12 text-center">
                        <button type="submit" className="btn btn-primary">
                          Register
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Register;
