import React from "react";
import { Link } from "react-router-dom";
import LoadingBox from "../../components/LoadingBox/LoadingBox";
import "./Vans.scss";

export default function Vans() {
  const [vans, setVans] = React.useState([]);
  React.useEffect(() => {
    fetch("/api/vans")
      .then((res) => res.json())
      .then((data) => setVans(data.vans));
  }, []);

  const vansElement = vans.map((item) => (
    <li key={item.id} className="van vans__item">
      <Link to={`/vans/${item.id}`} className="van__link">
        <img
          src={item.imageUrl}
          className="van__img"
          width="230"
          height="230"
          alt={`${item.name} van`}
        />
        <div className="van__description">
          <div className="van__wrapper-1">
            <h2 className="van__title">{item.name}</h2>
            <span className={`van-type van-type--${item.type}`}>
              {item.type}
            </span>
          </div>
          <div className="van__wrapper-2">
            <span className="van__price">${item.price}</span>
            <span className="van__period">/day</span>
          </div>
        </div>
      </Link>
    </li>
  ));

  return (
    <>
      {vans.length !== 0 ? (
        <section className="vans">
          <div className="container container--vans">
            <h1 className="vans__title">Explore our van options</h1>
            <ul className="vans__list">{vansElement}</ul>
          </div>
        </section>
      ) : (
        <LoadingBox />
      )}
    </>
  );
}
