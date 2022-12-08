import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <Fragment>
      <header id="tg-header" className="tg-header tg-haslayout">
        <div className="tg-middlecontainer">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <strong className="tg-logo">
                  <Link to="/" replace>
                    <img
                      src="/images/lending-library-logo.png"
                      alt="Lending Library"
                    />
                  </Link>
                </strong>
                <div className="tg-wishlistandcart d-flex align-items-center">
                  <div className="dropdown tg-themedropdown tg-wishlistdropdown">
                    <a
                      href="javascript:void(0);"
                      id="tg-wishlisst"
                      className="tg-btnthemedropdown"
                      data-toggle="dropdown"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      <span className="tg-themebadge">0</span>
                      <i className="fa fa-bell"></i>
                    </a>

                    <ul
                      className="dropdown-menu tg-themedropdownmenu"
                      type="none"
                      aria-labelledby="tg-wishlisst"
                      id="notification_list"
                    >
                      <li className="text-center">
                        <a className="dropdown-item d-block viewall" href="#">
                          View All
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="tg-themedropdown tg-minicartdropdown">
                    <ul className="tg-addnav">
                      <li>
                        <a href="#">
                          <i className="icon-lock"></i>
                          <em>Login</em>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i className="icon-lock"></i>
                          <em>Register</em>
                        </a>
                      </li>
                    </ul>

                    <div className="tg-userlogin bg-transparent p-0">
                      <div className="dropdown tg-themedropdown tg-currencydropdown border-0 my-0 mx-0">
                        <a
                          href="javascript:void(0);"
                          id="tg-currenty"
                          className="tg-btnthemedropdown"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                        >
                          <figure>
                            <img
                              src="/images/users/img-01.jpg"
                              alt="image description"
                            />
                          </figure>
                          <span>name</span>
                        </a>
                        <ul
                          className="dropdown-menu tg-themedropdownmenu"
                          aria-labelledby="tg-currenty"
                        >
                          <li>
                            <a href="#">
                              <i className="fa fa-user"></i>
                              <span>Profile</span>
                            </a>
                          </li>
                          <li>
                            <a href="#" className="linkTagComment">
                              <i className="fa fa-unlock-alt"></i>
                              <span>Change Password</span>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="linkTagComment"
                              onclick="event.preventDefault(); document.getElementById('logout-form').submit();"
                            >
                              <i className="fas fa-sign-out-alt"></i>
                              <i className="fa fa-sign-out iconHide"></i>
                              <span>Logout</span>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="tg-searchbox">
                  <form
                    className="tg-formtheme tg-formsearch"
                    action="{{ route('books.list"
                    method="get"
                  >
                    <fieldset>
                      <input
                        type="text"
                        name="search"
                        className="typeahead form-control"
                        placeholder="Search by title, author, genre, keyword, ISBN..."
                        value="mm"
                      />
                      <button type="submit">
                        <i className="icon-magnifier"></i>
                      </button>
                    </fieldset>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="tg-navigationarea">
          <div className="container">
            <div className="row">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <nav id="tg-nav" className="tg-nav">
                  <div className="navbar-header">
                    <button
                      type="button"
                      className="navbar-toggle collapsed"
                      data-toggle="collapse"
                      data-target="#tg-navigation"
                      aria-expanded="false"
                    >
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                    </button>
                  </div>
                  <div
                    id="tg-navigation"
                    className="collapse navbar-collapse tg-navigation"
                  >
                    <ul>
                      <li className="menu-item-has-children">
                        <a href="javascript:void(0);">Genres</a>
                        <ul className="sub-menu" role="sub-menu">
                          <li className="active">
                            <a href="#">name</a>
                          </li>
                        </ul>
                      </li>
                      <li className="menu-item-has-children">
                        <a href="javascript:void(0);">Books</a>
                        <ul className="sub-menu">
                          <li>
                            <a href="#">All Books</a>
                          </li>
                          <li>
                            <a href="#">My Books</a>
                          </li>
                          <li>
                            <a href="#">Add Book</a>
                          </li>
                          <li>
                            <a href="#">Books Lent</a>
                          </li>
                          <li>
                            <a href="#">Books Borrowed</a>
                          </li>
                          <li>
                            <a href="#">Public Requests</a>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <a href="#">Contact</a>
                      </li>
                      <li>
                        <NavLink to="/about">About</NavLink>
                      </li>
                      <li className="pull-right">
                        <a
                          href="#myModal"
                          data-toggle="modal"
                          data-target="#myModal"
                        >
                          Request For a Book
                        </a>
                      </li>
                    </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className="modal fade"
        id="myModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
      >
        <div className="modal-dialog requestModal" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title" id="myModalLabel">
                Want to request for new book
              </h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <div className="error-space d-none" id="savePopUpMsg">
                <div
                  className="alert alert-success alert-dismissible show"
                  role="alert"
                >
                  <strong>
                    Your request has been submitted and a notification sent to
                    all the community members.
                  </strong>
                  <button
                    type="button"
                    className="btn-close small"
                    data-bs-dismiss="alert"
                    aria-label="Close"
                  ></button>
                </div>
              </div>
              <div className="form-space">
                <form
                  className="tg-formtheme tg-formcontactus"
                  id="book_request"
                  method="POST"
                  encType="multipart/form-data"
                  action="javascript:void(0)"
                >
                  <fieldset className="fieldset form-group add-form">
                    <legend className="small font-16">Book Information</legend>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group w-100">
                          <label
                            for="public_request_title"
                            className="col-form-label text-md-start"
                          >
                            Book Name
                            <span className="mandatory text-danger">*</span>
                          </label>

                          <div className="w-100">
                            <input
                              id="public_request_title"
                              type="text"
                              className="form-control"
                              name="public_request_title"
                              value=""
                              autocomplete="public_request_title"
                              autofocus
                            />
                            <label
                              id="public_request_title-error"
                              className="error text-danger"
                              for="public_request_title"
                            ></label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group w-100">
                          <label
                            for="public_request_author"
                            className="col-form-label text-md-start"
                          >
                            Author
                            <span className="mandatory text-danger">*</span>
                          </label>

                          <div className="w-100">
                            <input
                              id="public_request_author"
                              type="text"
                              className="form-control"
                              name="public_request_author"
                              value=""
                              autocomplete="public_request_author"
                            />
                            <label
                              id="public_request_author-error"
                              className="error text-danger"
                              for="public_request_author"
                            ></label>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group w-100">
                          <label
                            for="author"
                            className="col-form-label text-md-start"
                          >
                            Message
                          </label>

                          <div className="w-100">
                            <textarea
                              id="message"
                              name="message"
                              placeholder="Message"
                              className="form-control"
                              autocomplete="subject"
                              rows="5"
                              autofocus
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                  </fieldset>
                  <div className="btnGroup">
                    <button
                      type="button"
                      className="btn btn-default"
                      data-dismiss="modal"
                    >
                      Cancel
                    </button>
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="modal-footer">
              <div className="btnGroup">
                <a className="text-primary" href="{{ route('bookRequests">
                  {" "}
                  View All Requests
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
export default Header;
