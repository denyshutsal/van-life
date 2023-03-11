import React from "react";
import { Link, useParams } from "react-router-dom";
import LoadingBox from "../../components/loading-box/LoadingBox";
import "./van-detail.scss";

export default function VanDetail() {
  const params = useParams();
  const [van, setVan] = React.useState([]);
  React.useEffect(() => {
    fetch(`/api/vans/${params.id}`)
      .then((res) => res.json())
      .then((data) => setVan(data.vans));
  }, [params.id]);

  return (
    <>
      {van.length !== 0 ? (
        <article className="van-details">
          <div className="container container--van-details">
            <Link to="/vans" className="van-details__back-link">
              Back to all vans
            </Link>
            <img
              src={van.imageUrl}
              className="van-details__img"
              alt={`${van.name} van`}
            />
            <div className="van-details__description">
              <div className="van-details__wrapper-1">
                <h2 className="van-details__title">{van.name}</h2>
                <span className={`van-type van-type--${van.type}`}>
                  {van.type}
                </span>
              </div>
              <div className="van-details__wrapper-2">
                <span className="van-details__price">${van.price}</span>
                <span className="van-details__period">/day</span>
              </div>
              <p className="van-details__text">{van.description}</p>
            </div>
            <button className="van-details__btn">Rent this van</button>
          </div>
        </article>
      ) : (
        <LoadingBox />
      )}
    </>
  );
}
