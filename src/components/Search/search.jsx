import React, { useState, useEffect } from "react";
import "./search.css";

export default function Search({ handleSearch, query }) {
  return (
    <div>
      <input
        placeholder="movie name"
        type="text"
        onChange={handleSearch}
        value={query}
      />
    </div>
  );
}
