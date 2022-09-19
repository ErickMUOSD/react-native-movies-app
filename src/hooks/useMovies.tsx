import movieDB from "../api/moviedb";
import { TvShow, MovieDbPopular } from "../interfaces/TVShowInterface";
import { useEffect, useState } from "react";

export const useMovies = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [popular, setPopular] = useState<TvShow>([]);
  const getMovies = async () => {
    const resp = await movieDB.get<MovieDbPopular>("/popular");
    const movies = resp.data.results;
    setPopular(movies);
    setIsLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);

  return {
    isLoading,
    popular
  };
};
