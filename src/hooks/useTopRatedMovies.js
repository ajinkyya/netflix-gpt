import {API_OPTIONS} from "../Utils/constants"
import { useEffect } from "react";
import { addTopratedMovies } from "../Utils/movieSlice";
import { useDispatch } from "react-redux";
const useTopRatedMovies = () => {
    const dispatch = useDispatch();

  const getTopRatedMovies = async () =>{
    const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTIONS)

    const json = await data.json();
    dispatch(addTopratedMovies(json.results));
  }

  useEffect(()=>{
    getTopRatedMovies()
  },[])
}

export default useTopRatedMovies;