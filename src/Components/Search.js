import React from "react";
import "./Search.css";
import { MdOutlineSearch } from "react-icons/md";
const Search = () => {
  return (
    <div className="inputContainer">
      <form className="searchForm">
        <MdOutlineSearch size="30" />
        <input type="text"></input>
      </form>
    </div>
  );
};
export default Search;
