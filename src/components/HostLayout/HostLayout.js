import React from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";
import "./HostLayout.scss";

export default function HostLayout() {
  return (
    <div className="container container--host">
      <nav className="host-nav">
        <ul className="host-nav__list">
          <li className="host-nav__item">
            <NavLink
              to="."
              end
              className={({ isActive }) =>
                isActive
                  ? "host-nav__link host-nav__link--active"
                  : "host-nav__link"
              }
            >
              Dashboard
            </NavLink>
          </li>
          <li className="host-nav__item">
            <NavLink
              to="income"
              className={({ isActive }) =>
                isActive
                  ? "host-nav__link host-nav__link--active"
                  : "host-nav__link"
              }
            >
              Income
            </NavLink>
          </li>
          <li className="host-nav__item">
            <NavLink
              to="vans"
              className={({ isActive }) =>
                isActive
                  ? "host-nav__link host-nav__link--active"
                  : "host-nav__link"
              }
            >
              Vans
            </NavLink>
          </li>
          <li className="host-nav__item">
            <NavLink
              to="reviews"
              className={({ isActive }) =>
                isActive
                  ? "host-nav__link host-nav__link--active"
                  : "host-nav__link"
              }
            >
              Reviews
            </NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  );
}
