import React from "react";
import { useState, useEffect } from "react";
import "./footer.scss";

export default function Footer() {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 1000 * 60 * 60 * 24);
    return function cleanup() {
      clearInterval(timer);
    };
  });

  return (
    <footer className="site-footer">
      &#169; {date.getFullYear()} #VANLIFE
    </footer>
  );
}
