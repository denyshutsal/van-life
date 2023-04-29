import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import HostLayout from "./components/HostLayout/HostLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Vans from "./pages/Vans/Vans";
import VanDetail from "./pages/Vans/VanDetail/VanDetail";
import Dashboard from "./pages/Host/Dashboard/Dashboard";
import Income from "./pages/Host/Income/Income";
import Reviews from "./pages/Host/Reviews/Reviews";
import HostVans from "./pages/Host/HostVans/HostVans";
import HostVanDetail from "./pages/Host/HostVanDetail/HostVanDetail";
import HostVanInfo from "./pages/Host/HostVanInfo/HostVanInfo";
import HostVanPricing from "./pages/Host/HostVanPricing/HostVanPricing";
import HostVanPhotos from "./pages/Host/HostVanPhotos/HostVanPhotos";
import "./server";
import "./normalize.css";
import "./index.scss";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="vans" element={<Vans />} />
          <Route path="vans/:id" element={<VanDetail />} />

          <Route path="host" element={<HostLayout />}>
            <Route index element={<Dashboard />} />
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />}>
              <Route index element={<HostVanInfo />} />
              <Route path="pricing" element={<HostVanPricing />} />
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
