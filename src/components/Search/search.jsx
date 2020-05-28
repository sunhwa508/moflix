import React, { useState, useEffect } from "react";
import "./search.css";

export default function Search({ handleSearch, query }) {
  return (
    <div className="inputdiv">
      <input
        placeholder="movie name"
        type="text"
        onChange={handleSearch}
        value={query}
      />
    </div>
  );
}
