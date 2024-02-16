import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies"
import usePopularMovies from "../hooks/usePopularMovies"
import useUpcomingMovies from "../hooks/useUpcomingMovies"
import useTopRatedMovies from "../hooks/useTopRatedMovies"
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";

const Browse = () => {

  useNowPlayingMovies();
  usePopularMovies();
  useUpcomingMovies();
  useTopRatedMovies();

  const gptSearchView = useSelector((store) => store.gpt.showGptSearch)
  return (
    <div>
      <Header />
      {(gptSearchView)?
      <GptSearch />:
      <>
        <MainContainer />   
        <SecondaryContainer />  
      </>}
      
     
    </div>
  );
};
export default Browse;