import { Fragment } from "react";

function ContactUsPage() {
  return (
    <Fragment>
      <div
        class="tg-innerbanner tg-haslayout tg-parallax tg-bginnerbanner"
        data-z-index="-100"
        data-appear-top-offset="600"
        data-parallax="scroll"
        data-image-src="/images/contact-us-page-banner.jpg"
      >
        <div class="container">
          <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div class="tg-innerbannercontent"></div>
            </div>
          </div>
        </div>
      </div>

      <div class="tg-sectionspace tg-haslayout">
        <div class="container">
          <div class="row">
            <div class="tg-contactus">
              <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <div class="tg-sectionhead">
                  <h2>
                    <span>Say Hello!</span>Get In Touch With Us
                  </h2>
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div class="tg-contactdetail">
                  <ul class="tg-contactinfo">
                    <li>
                      <i class="icon-apartment"></i>
                      <address>message.footer.address</address>
                    </li>
                    <li>
                      <i class="icon-phone-handset"></i>
                      <span>
                        <em>message.footer.phone_1</em>
                        <em>message.footer.phone_2</em>
                      </span>
                    </li>
                    <li>
                      <i class="icon-clock"></i>
                      <span>message.footer.available</span>
                    </li>
                    <li>
                      <i class="icon-envelope"></i>
                      <span>
                        <em>
                          <a href="message.footer.email_support">
                            message.footer.email_support
                          </a>
                        </em>
                        <em>
                          <a href="message.footer.email_info">
                            message.footer.email_info
                          </a>
                        </em>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-xs-12 col-sm-12 col-md-6 col-lg-6">
                <div
                  class="alert alert-success alert-dismissible show"
                  role="alert"
                >
                  <strong>$message</strong>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
                <div
                  class="alert alert-danger alert-dismissible show"
                  role="alert"
                >
                  <strong>$message</strong>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
                <form
                  id="contactForm"
                  method="POST"
                  action="{{ route('postcontact') }}"
                  class="tg-formtheme tg-formcontactus"
                >
                  <fieldset>
                    <div class="form-group">
                      <input
                        id="first_name"
                        type="text"
                        class="form-control @error('first_name') is-invalid @enderror"
                        name="first_name"
                        value="first_name"
                        placeholder="First Name"
                        autocomplete="first_name"
                        autofocus
                      />

                      <span class="invalid-feedback" role="alert">
                        <strong>hgjhgjhj</strong>
                      </span>
                    </div>
                    <div class="form-group">
                      <input
                        id="last_name"
                        type="text"
                        class="form-control @error('last_name') is-invalid @enderror"
                        name="last_name"
                        value="last_name"
                        placeholder="Last Name"
                        autocomplete="last_name"
                        autofocus
                      />

                      <span class="invalid-feedback" role="alert">
                        <strong>$message</strong>
                      </span>
                    </div>
                    <div class="form-group">
                      <input
                        id="email"
                        type="email"
                        class="form-control @error('email') is-invalid @enderror"
                        name="email"
                        value="email"
                        placeholder="Email"
                        autocomplete="email"
                      />

                      <span class="invalid-feedback" role="alert">
                        <strong>$message </strong>
                      </span>
                    </div>
                    <div class="form-group">
                      <input
                        id="subject"
                        type="text"
                        placeholder="Subject (optional)"
                        class="form-control @error('subject') is-invalid @enderror"
                        name="subject"
                        value="subject"
                        autocomplete="subject"
                        autofocus
                      />
                      <span class="invalid-feedback" role="alert">
                        <strong>$message</strong>
                      </span>
                    </div>
                    <div class="form-group tg-hastextarea">
                      <textarea
                        id="comment"
                        name="comment"
                        placeholder="Comment"
                        class="form-control @error('comment') is-invalid @enderror"
                        autocomplete="subject"
                        autofocus
                      ></textarea>
                      <span class="invalid-feedback" role="alert">
                        <strong>dfghjkl</strong>
                      </span>
                    </div>
                    <div class="form-group">
                      <button type="submit" class="tg-btn tg-active">
                        Submit
                      </button>
                    </div>
                  </fieldset>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default ContactUsPage;
