import React from "react";
import { Input } from "antd";

const { Search } = Input;

const SearchMovie = ({ movieData, handleGetSearchData }) => {
  const handleSearch = (value) => {
    let newData = movieData.filter((movie) =>
      movie.title.toLowerCase().includes(value.toLowerCase())
    );
    handleGetSearchData(newData);
  };
  return (
    <div className="w-1/3">
      <Search
        placeholder="Search Movie..."
        style={{
          width: "100%",
        }}
        onChange={(e) => handleSearch(e.target.value)}
      />
    </div>
  );
};

export default SearchMovie;
