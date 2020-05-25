import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
export default function header() {
  return (
    <div className="container">
      <div className="header">
        <Link to="/" className="title">
          <h2>MOFLIX</h2>
        </Link>
      </div>
    </div>
  );
}
