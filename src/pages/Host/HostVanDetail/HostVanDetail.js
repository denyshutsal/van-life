import React from "react";
import { useState, useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import HostVansNav from "../../../components/HostVansNav/HostVansNav";
import BackLink from "../../../components/BackLink/BackLink";
import LoadingBox from "../../../components/LoadingBox/LoadingBox";
import "./HostVanDetail.scss";

export default function HostVanDetail() {
  const [currentVan, setCurrentVan] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((res) => res.json())
      .then((data) => setCurrentVan(data.vans));
  }, [id]);

  return (
    <>
      {currentVan.length !== 0 ? (
        <>
          <BackLink text={"Back to listed vans"} />
          <section className="host-van-details">
            <div className="host-van-details__header-wrapper">
              <img
                src={currentVan.imageUrl}
                className="host-van-details__img"
                alt={`${currentVan.name} van`}
              />
            </div>
            <HostVansNav />
            <Outlet context={{ currentVan }} />
          </section>
        </>
      ) : (
        <LoadingBox />
      )}
    </>
  );
}
