import React, { useState } from "react";
import "./search.css";
export default function Search({ inputSearch = Function.prototype }) {
  const [input, setInput] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    inputSearch(input);
  };
  const handleKey = (e) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };
  return (
    <form className="browser-default" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Search..."
        className="browser-default"
        onKeyDown={handleKey}
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input || ""}
      />
      <button className="browser-default" onSubmit={handleSubmit}>
        Search
      </button>
    </form>
  );
}
