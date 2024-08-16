import React from "react";
import { Select } from "antd";
import { Radio } from "antd";

const MovieFilter = ({ movieData, handleGetSearchData }) => {
  const onChange = (e, type) => {
    let newData = [];
    if (type == "month") {
      let monthRange = e.split("-");

      for (let i = 0; i < movieData.length; i++) {
        let movieMonth = new Date(movieData[i].release_date).getMonth() + 1;
        if (movieMonth >= monthRange[0] && movieMonth <= monthRange[1]) {
          newData.push(movieData[i]);
        }
      }
    }
    if (type == "lang") {
      newData = movieData.filter(
        (movie) => movie.original_language == e.target.value
      );
    }

    if (type == "rating") {
      for (let i = 0; i < movieData.length; i++) {
        if (
          Math.round(movieData[i].vote_average) == Math.round(e) ||
          Math.round(movieData[i].vote_average) > Math.round(e)
        ) {
          newData.push(movieData[i]);
        }
      }
    }
    handleGetSearchData(newData);
  };

  return (
    <div className="md:flex md:justify-between">
      <div className="mb-5">
        <h6>By Month</h6>
        <Select
          showSearch
          placeholder="Movies By Month"
          onChange={(value) => onChange(value, "month")}
          options={[
            {
              value: "1-2",
              label: "JAN-FEB",
            },
            {
              value: "3-4",
              label: "MAR-APR",
            },
            {
              value: "5-6",
              label: "MAY-JUNE",
            },
            {
              value: "7-8",
              label: "JULY-AUG",
            },
            {
              value: "9-10",
              label: "SEP-OCT",
            },
            {
              value: "11-12",
              label: "NOV-DEC",
            },
          ]}
        />
      </div>
      <div className="mb-5">
        <h6>Languages</h6>
        <Radio.Group onChange={(value) => onChange(value, "lang")}>
          <Radio value="en">English</Radio>
          <Radio value="hi">Hindi</Radio>
          <Radio value="es">Spanish</Radio>
        </Radio.Group>
      </div>
      <div>
        <h6>Ratings</h6>
        <Select
          showSearch
          placeholder="Movies By Rating"
          onChange={(value) => onChange(value, "rating")}
          options={[
            {
              value: "5",
              label: "5",
            },
            {
              value: "6",
              label: "6",
            },
            {
              value: "7",
              label: "7",
            },
            {
              value: "8",
              label: "8",
            },
            {
              value: "9",
              label: "9",
            },
            {
              value: "10",
              label: "10",
            },
          ]}
        />
      </div>
    </div>
  );
};

export default MovieFilter;
