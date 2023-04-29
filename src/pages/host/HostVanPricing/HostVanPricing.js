import React from "react";
import { useOutletContext } from "react-router-dom";
import "./HostVanPricing.scss";

export default function HostVanPricing() {
  const { currentVan } = useOutletContext();

  return (
    <section className="host-van-pricing">
      <div className="host-van-pricing__price-wrapper">
        <span className="host-van-pricing__price">${currentVan.price}</span>
        <span className="host-van-pricing__period">/day</span>
      </div>
    </section>
  );
}
