import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container container--header">
        <Link className="site-logo" to="/">
          #Vanlife
        </Link>
        <nav className="site-nav">
          <ul className="site-nav__list">
            <li className="site-nav__item">
              <NavLink
                to="host"
                className={({ isActive }) =>
                  isActive
                    ? "site-nav__link site-nav__link--active"
                    : "site-nav__link"
                }
              >
                Host
              </NavLink>
            </li>
            <li className="site-nav__item">
              <NavLink
                to="about"
                className={({ isActive }) =>
                  isActive
                    ? "site-nav__link site-nav__link--active"
                    : "site-nav__link"
                }
              >
                About
              </NavLink>
            </li>
            <li className="site-nav__item">
              <NavLink
                to="vans"
                className={({ isActive }) =>
                  isActive
                    ? "site-nav__link site-nav__link--active"
                    : "site-nav__link"
                }
              >
                Vans
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
