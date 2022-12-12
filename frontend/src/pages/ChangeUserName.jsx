import { Fragment } from "react";

function ChangePasswordPage() {
  return (
    <Fragment>
      <div class="tg-sectionspace tg-haslayout">
        <div class="container">
          <div class="row">
            <div class="panel panel-default login-card">
              <div class="tg-contactus panel-body">
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <div
                    class="tg-sectionhead text-center"
                    style="padding-right:0;"
                  >
                    <h2 class="d-block w-100">Change Username</h2>
                  </div>
                </div>
                <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <form
                    class="tg-formtheme tg-formcontactus"
                    method="POST"
                    action="{{ route('setting.username.process') }}"
                  >
                    <fieldset class="fieldset form-group">
                      <div class="form-group w-100">
                        <label
                          for="username"
                          class="col-form-label text-md-start"
                        >
                          Username
                        </label>
                        <input
                          id="username"
                          type="text"
                          value="{{ $user->username }}"
                          class="form-control @error('username') is-invalid @enderror"
                          name="username"
                          required
                          autocomplete="current-password"
                        />

                        <span class="invalid-feedback" role="alert">
                          <strong>$message</strong>
                        </span>
                      </div>

                      <div class="form-group text-center w-100">
                        <button type="submit" class="btn btn-primary">
                          Change Username
                        </button>
                      </div>
                    </fieldset>
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

export default ChangePasswordPage;
