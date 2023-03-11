import React from "react";
import { Link } from "react-router-dom";
import "./home.scss";

export default function Home() {
  return (
    <section className="home">
      <div className="container container--home">
        <h1 className="home__title">
          You got the travel plans, we got the travel vans.
        </h1>
        <p className="home__text">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link to="/vans" className=" home__link">
          Find your van
        </Link>
      </div>
    </section>
  );
}
