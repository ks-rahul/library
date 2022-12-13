import { Fragment } from "react";
import { Link } from "react-router-dom";

function HeaderNotification() {
  return (
    <Fragment>
      <div className="dropdown tg-themedropdown tg-wishlistdropdown">
        <button
          type="button"
          id="tg-wishlisst"
          className="tg-btnthemedropdown"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          <span className="tg-themebadge">0</span>
          <i className="fa fa-bell"></i>
        </button>

        <ul
          className="dropdown-menu tg-themedropdownmenu"
          type="none"
          aria-labelledby="tg-wishlisst"
          id="notification_list"
        >
          <li className="text-center">
            <Link className="dropdown-item d-block viewall" to="/">
              View All
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
}

export default HeaderNotification;
