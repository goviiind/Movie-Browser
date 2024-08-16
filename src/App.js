import React, { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import SearchMovie from "./components/SearchMovie";
import "./index.css";
import MovieFilter from "./components/MovieFilter";
import { API_ROUTE, Access_Token } from "./config";

function App() {
  const [movieData, setMovieData] = useState([]);
  const [favouriteMovies, setFavouriteMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: Access_Token,
      },
    };
    const getData = async () => {
      try {
        const response = await fetch(
          `${API_ROUTE}/now_playing?language=en-US&page=1'`,
          options
        );
        const res = await response.json();
        if (res) {
          setMovieData(res.results);
        }
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  const getFavouriteMovie = (movie) => {
    setFavouriteMovies([...favouriteMovies, movie]);
  };

  const handleGetSearchData = (movies) => {
    setSearchedMovies(movies);
  };

  return (
    <div className="bg-gray-200 h-full w-full md:py-10 md:px-32 p-10">
      <div className="flex justify-between">
        <p className="text-2xl">Movie Browser</p>
        <SearchMovie
          movieData={movieData}
          handleGetSearchData={handleGetSearchData}
        />
      </div>
      <div className="mt-5 w-full h-full">
        <div className="my-5">
          <p className="text-2xl mb-5">Filter</p>
          <MovieFilter
            movieData={movieData}
            handleGetSearchData={handleGetSearchData}
          />
        </div>
        <div>
          <p className="text-2xl">All Movies</p>
          <MovieList
            movieData={searchedMovies.length > 0 ? searchedMovies : movieData}
            getFavouriteMovie={getFavouriteMovie}
          />
        </div>
        <div>
          <p className="text-2xl">Favourite Movies</p>
          <MovieList movieData={favouriteMovies} isFavourite={true} />
        </div>
      </div>
    </div>
  );
}

export default App;
