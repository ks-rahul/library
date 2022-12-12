import { Fragment } from "react";

function HeaderNotification() {
  return (
    <Fragment>
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
    </Fragment>
  );
}

export default HeaderNotification;
