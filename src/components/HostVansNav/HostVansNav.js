import React from "react";
import { NavLink } from "react-router-dom";
import "./HostVansNav.scss";

export default function HostVansNav() {
  return (
    <nav className="host-vans-nav">
      <ul className="host-vans-nav__list">
        <li className="host-vans-nav__item">
          <NavLink
            to="."
            end
            className={({ isActive }) =>
              isActive
                ? "host-vans-nav__link host-vans-nav__link--active"
                : "host-vans-nav__link"
            }
          >
            Details
          </NavLink>
        </li>
        <li className="host-vans-nav__item">
          <NavLink
            to="pricing"
            className={({ isActive }) =>
              isActive
                ? "host-vans-nav__link host-vans-nav__link--active"
                : "host-vans-nav__link"
            }
          >
            Pricing
          </NavLink>
        </li>
        <li className="host-vans-nav__item">
          <NavLink
            to="photos"
            className={({ isActive }) =>
              isActive
                ? "host-vans-nav__link host-vans-nav__link--active"
                : "host-vans-nav__link"
            }
          >
            Photos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
