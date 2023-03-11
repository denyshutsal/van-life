import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

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
              <Link to="/about" className="site-nav__link">
                About
              </Link>
            </li>
            <li className="site-nav__item">
              <Link to="/vans" className="site-nav__link">
                Vans
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
