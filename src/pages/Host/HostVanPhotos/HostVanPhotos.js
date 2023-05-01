import React from "react";
import { useOutletContext } from "react-router-dom";
import "./HostVanPhotos.scss";

export default function HostVanPhotos() {
  const { currentVan } = useOutletContext();

  return (
    <section className="host-van-photos">
      <img
        src={currentVan.imageUrl}
        className="host-van-photos__img"
        alt={`${currentVan.name} van`}
      />
    </section>
  );
}
