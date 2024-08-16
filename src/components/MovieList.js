import React, { useState } from "react";
import { IMG_URL } from "../config";
import { Button } from "antd";

const MovieList = ({ movieData, isFavourite, getFavouriteMovie }) => {
  const [favouriteAdded, setFovouriteAdded] = useState([]);

  const handleClick = (movie) => {
    setFovouriteAdded([...favouriteAdded, movie.id]);
    getFavouriteMovie(movie);
  };

  return (
    <div className="flex my-5 w-full overflow-auto">
      {movieData
        ? movieData &&
          movieData.map((movie) => {
            return (
              <div
                style={{ width: "250px" }}
                className="block rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 mr-6"
              >
                <img
                  className="rounded-t-lg"
                  src={IMG_URL + movie.poster_path}
                  alt={movie.title}
                />

                <div className="p-6">
                  <h5
                    style={{ width: "200px" }}
                    className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50"
                  >
                    {movie.title}
                  </h5>
                  <p className="mb-6 text-base text-neutral-600 dark:text-neutral-200">
                    {new Date(movie.release_date).getFullYear()}
                  </p>

                  {!isFavourite && (
                    <Button
                      type="primary"
                      block
                      onClick={() => handleClick(movie)}
                      disabled={favouriteAdded.includes(movie.id)}
                    >
                      Add To Favourites
                    </Button>
                  )}
                </div>
              </div>
            );
          })
        : "Loading"}
    </div>
  );
};

export default MovieList;
