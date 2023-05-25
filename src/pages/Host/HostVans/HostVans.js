import React from "react";
import { Link } from "react-router-dom";
import LoadingBox from "../../../components/LoadingBox/LoadingBox";
import "./HostVans.scss";

export default function HostVans() {
  const [vans, setVans] = React.useState([]);

  React.useEffect(() => {
    fetch("/api/host/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const hostVansElements = vans.map((item) => (
    <li key={item.id} className="host-van host-vans__item">
      <Link to={item.id} className="host-van__link">
        <img
          src={item.imageUrl}
          className="host-van__img"
          width="66"
          height="66"
          alt={`${item.name} van`}
        />
        <div className="host-van__description">
          <h2 className="host-van__title">{item.name}</h2>
          <span className="host-van__price">${item.price}/day</span>
        </div>
      </Link>
    </li>
  ));

  return (
    <>
      {vans.length !== 0 ? (
        <section className="host-vans">
          <h1 className="host-vans__title">Your listed vans</h1>
          <ul className="host-vans__list">{hostVansElements}</ul>
        </section>
      ) : (
        <LoadingBox />
      )}
    </>
  );
}
