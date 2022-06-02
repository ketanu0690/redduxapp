import React , {useEffect} from "react";
import Movielisting from "../MovieListing/MovieListing";
import { fetchAsyncMovies } from "../../features/movies/movieSlice";
import { useDispatch } from "react-redux";
import { fetchAsyncShows } from "../../features/movies/movieSlice";
// import { addMovies } from "../../features/movies/movieSlice";

const Home = () => {
  const dispatch = useDispatch()
  const movieText =  "fast";
  const showText = "Friends";
  useEffect(() => {
    dispatch(fetchAsyncMovies(movieText))
    dispatch(fetchAsyncShows(showText))
    }, [dispatch]);

  return (
    <div>
      <div className="banner-img"></div>
      <Movielisting />
    </div>
  );
};

export default Home;
