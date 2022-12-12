import { Fragment } from "react";
import { Link, NavLink } from "react-router-dom";

import HeaderNotification from "./HeaderNotification";
import SearchForm from "./SearchForm";

import useAuthentication from "../../hooks/isUserAuthenticated";
import { useState } from "react";
import { useEffect } from "react";

const loggedInMenu = [
  {
    name: "Genres",
    path: "/",
    children: [{ name: "Genres 1", path: "/", children: [] }],
  },
  {
    name: "Books",
    path: "/",
    children: [
      { name: "All Books", path: "/", children: [] },
      { name: "My Books", path: "/", children: [] },
      { name: "Add Book", path: "/", children: [] },
      { name: "Books Lent", path: "/", children: [] },
      { name: "Books Borrowed", path: "/", children: [] },
      { name: "Public Request", path: "/", children: [] },
    ],
  },
  {
    name: "Contact",
    path: "/",
    children: [],
  },
  {
    name: "About",
    path: "/",
    children: [],
  },
];

const loggedOutMenu = [
  { name: "Home", path: "/", children: [] },
  { name: "Our Goal & Mission", path: "/", children: [] },
  { name: "How We Work", path: "/", children: [] },
  { name: "Our Journey", path: "/", children: [] },
  {
    name: "About",
    path: "/",
    children: [
      { name: "Team", path: "/", children: [] },
      { name: "Contact", path: "/", children: [] },
    ],
  },
];

const userProfileDropdownMenu = [
  { name: "Profile", path: "/", icon: "fa fa-user" },
  { name: "Change Password", path: "/", icon: "fa fa-unlock-alt" },
  {
    name: "Log Out",
    path: "",
    isA: true,
    icon: "fa fa-sign-out",
  },
];

function Header() {
  const { isUserAuthenticated } = useAuthentication();

  const [isLoggedIn, setIsLoggedIn] = useState(isUserAuthenticated);
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    setIsLoggedIn(isUserAuthenticated);
    if (isUserAuthenticated) {
      setMenus(loggedInMenu);
    } else {
      setMenus(loggedOutMenu);
    }
  }, [isUserAuthenticated]);

  const onLogOut = () => {};

  return (
    <Fragment>
      <header id="tg-header" className="tg-header tg-haslayout">
        {isLoggedIn && (
          <div className="tg-middlecontainer">
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <Logo />
                  <div className="tg-wishlistandcart d-flex align-items-center">
                    <HeaderNotification />
                    <UserDropdown
                      user={{ image: "/images/users/img-01.jpg" }}
                      onclick={onLogOut}
                    />
                  </div>
                  <SearchForm />
                </div>
              </div>
            </div>
          </div>
        )}

        <div className="tg-navigationarea">
          <div className="container">
            <div className="row">
              {!isLoggedIn && (
                <div className="col-xs-12 col-sm-3 col-md-2 col-lg-2">
                  <Logo />
                </div>
              )}
              <div
                className={`${
                  !isLoggedIn
                    ? "col-xs-12 col-sm-9 col-md-10 col-lg-10"
                    : "col-xs-12 col-sm-12 col-md-12 col-lg-12"
                }`}
              >
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
                      {menus.map((menu, idx) =>
                        menu.children.length ? (
                          <li
                            className="menu-item-has-children"
                            key={menu.name + "_" + idx}
                          >
                            <button type="button" className="text-linkbtn">
                              {menu.name}
                            </button>
                            <ul className="sub-menu">
                              {menu.children.map((sub, idx) => (
                                <li
                                  className="active"
                                  key={sub.name + "_" + idx}
                                >
                                  <NavLink to={sub.path}>{sub.name}</NavLink>
                                </li>
                              ))}
                            </ul>
                          </li>
                        ) : (
                          <li key={menu.name + "_" + idx}>
                            <NavLink to={menu.path}>{menu.name}</NavLink>
                          </li>
                        )
                      )}

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
                >
                  <fieldset className="fieldset form-group add-form">
                    <legend className="small font-16">Book Information</legend>
                    <div className="row">
                      <div className="col-md-12">
                        <div className="form-group w-100">
                          <label
                            htmlFor="public_request_title"
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
                              autoComplete="public_request_title"
                              autoFocus
                            />
                            <label
                              id="public_request_title-error"
                              className="error text-danger"
                              htmlFor="public_request_title"
                            ></label>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group w-100">
                          <label
                            htmlFor="public_request_author"
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
                              autoComplete="public_request_author"
                            />
                            <label
                              id="public_request_author-error"
                              className="error text-danger"
                              htmlFor="public_request_author"
                            ></label>
                          </div>
                        </div>
                      </div>

                      <div className="col-md-12">
                        <div className="form-group w-100">
                          <label
                            htmlFor="author"
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
                              autoComplete="subject"
                              rows="5"
                              autoFocus
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

const Logo = () => (
  <strong className="tg-logo">
    <Link to="/" replace>
      <img src="/images/lending-library-logo.png" alt="Lending Library" />
    </Link>
  </strong>
);

const UserDropdown = ({ user, onclick }) => (
  <div className="tg-themedropdown tg-minicartdropdown">
    <div className="tg-userlogin bg-transparent p-0">
      <div className="dropdown tg-themedropdown tg-currencydropdown border-0 my-0 mx-0">
        <button
          type="button"
          id="tg-currenty"
          className="tg-btnthemedropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <figure>
            <img src={user.image} alt={`${user.name}_image`} />
          </figure>
          <span>{user.name}</span>
        </button>
        <ul
          className="dropdown-menu tg-themedropdownmenu"
          aria-labelledby="tg-currenty"
        >
          {userProfileDropdownMenu.map((menu, idx) => (
            <li key={menu.name + "_" + idx}>
              {menu.isA ? (
                <a href={menu.path} onClick={onclick}>
                  <i className={menu.icon}></i>
                  <span>{menu.name}</span>
                </a>
              ) : (
                <NavLink to={menu.path} key={menu.name + "_" + idx}>
                  <i className={menu.icon}></i>
                  {menu.name}
                </NavLink>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);

export default Header;
