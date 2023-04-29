import React from "react";
import { Link } from "react-router-dom";
import "./About.scss";

export default function About() {
  return (
    <section className="about">
      <div className="container container--about">
        <h1 className="about__title">
          Don’t squeeze in a sedan when you could relax in a van.
        </h1>
        <p className="about__text">
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p className="about__text">
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <section className="cta">
          <h2 className="cta__title">
            Your destination is waiting.
            <br />
            Your van is ready.
          </h2>
          <Link className="cta__link" to="/vans">
            Explore our vans
          </Link>
        </section>
      </div>
    </section>
  );
}
