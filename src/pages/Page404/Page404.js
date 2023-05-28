import React from "react";
import { Link } from "react-router-dom";
import "./Page404.scss";

export default function Page404() {
  return (
    <section className="page404">
      <h1 className="page404__title">
        Sorry, the page you were looking for was not found!
      </h1>
      <Link to="/">Return to home</Link>
    </section>
  );
}
