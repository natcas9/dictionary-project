import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=7cfac3t6d90fo31f4fb0ff0151e8560c`;
    axios
      .get(apiUrl)
      .then(handleResponse)
      .catch((error) => {
        console.error("API error:", error);
      });
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={handleKeywordChange} />
      </form>
    </div>
  );
}
