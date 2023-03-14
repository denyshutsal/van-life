import React from "react";
import { Link } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./HostLayout.scss";

export default function HostLayout() {
  return (
    <>
      <nav className="host-nav">
        <ul className="host-nav__list">
          <li className="host-nav__item">
            <Link to="/host" className="host-nav__link">
              Dashboard
            </Link>
          </li>
          <li className="host-nav__item">
            <Link to="/host/income" className="host-nav__link">
              Income
            </Link>
          </li>
          <li className="host-nav__item">
            <Link to="/host/reviews" className="host-nav__link">
              Reviews
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  );
}
