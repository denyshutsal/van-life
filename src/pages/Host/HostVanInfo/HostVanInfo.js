import React from "react";
import { useOutletContext } from "react-router-dom";
import "./HostVanInfo.scss";

export default function HostVanInfo() {
  const { currentVan } = useOutletContext();

  return (
    <section className="host-van-info">
      <h2 className="host-van-info__title">
        <span className="host-van-info__bold">Name: </span>
        {currentVan.name}
      </h2>
      <p className="host-van-info__type">
        <span className="host-van-info__bold">Category: </span>
        {currentVan.type}
      </p>
      <p className="host-van-info__text">
        <span className="host-van-info__bold">Description: </span>
        {currentVan.description}
      </p>
    </section>
  );
}
