import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => {
  let user = props.loggedIn ? (
    <div className="navbar-end">
      <div className="navbar-item">{props.username}</div>
    </div>
  ) : (
    ""
  );

  let logout = props.loggedIn ? (
    <a
      className="navbar-item"
      onClick={e => {
        e.preventDefault();
        props.logoutUser();
      }}
    >
      Logout
    </a>
  ) : null;
  return (
    <nav className="navbar is-fixed-top is-black">
      <div className="navbar-menu">
        <div className="navbar-start">
          <Link className="navbar-item" to="/">
            Home
          </Link>
          {logout}
        </div>
        {user}
      </div>
    </nav>
  );
};
export default NavBar;
