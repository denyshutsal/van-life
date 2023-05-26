import React from "react";
import { Link } from "react-router-dom";
import "./BackLink.scss";

export default function BackLink({ text, path = ".." }) {
  return (
    <Link to={path} relative="path" className="back-link">
      {text}
    </Link>
  );
}
