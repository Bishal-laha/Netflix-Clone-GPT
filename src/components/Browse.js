import {useSelector} from "react-redux";
// import {BrowseMainContainer,BrowseSecondContainer,BrowseHeader,GPTMain} from "./Index.js";
import BrowseMainContainer from "./BrowseMainContainer.js";
import BrowseSecondContainer from "./BrowseSecondContainer.js";
import BrowseHeader from "./BrowseHeader.js";
import GPTMain from "./GPTMain.js";
import {useNowPlayingMovie,usePopularMovie,useTopRatedMovie,useUpcomingMovie,useAirTodayTvSeries,usePeople,useOnTheAirTvSeries,usePopularTvSeries,useTopRatedTvSeries} from "../hooks/Index.js";
// import useNowPlayingMovie from "../hooks/useNowPlayingMovie.js";
// import usePopularMovie from "../hooks/usePopularMovie.js";
// import useTopRatedMovie from "../hooks/useTopRatedMovie.js";
// import useUpcomingMovie from "../hooks/useUpcomingMovie.js";
// import useAirTodayTvSeries from "../hooks/useAirTodayTvSeries.js";
// import usePeople from "../hooks/usePeople.js";
// import useOnTheAirTvSeries from "../hooks/useOnTheAirTvSeries.js";
// import usePopularTvSeries from "../hooks/usePopularTvSeries.js";
// import useTopRatedTvSeries from "../hooks/useTopRatedTvSeries.js";

const Browse = () => {
  const toggleGptPage = useSelector((store) => store?.gpt?.toggleGptPage);
  //USING CUSTOM HOOKS
  useNowPlayingMovie();
  usePopularMovie();
  useTopRatedMovie();
  useUpcomingMovie();
  useAirTodayTvSeries();
  useOnTheAirTvSeries();
  usePopularTvSeries();
  useTopRatedTvSeries();
  usePeople();

  return (
    <div>
      <BrowseHeader />
      {/* //This is used to go GPT-SEARCH PAGE */}
      {toggleGptPage ? (
        <GPTMain />
      ) : (
        <>
          <BrowseMainContainer />
          <BrowseSecondContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
