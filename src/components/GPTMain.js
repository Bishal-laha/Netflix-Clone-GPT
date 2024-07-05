// import {GPTSearchBar,GPTSearchResult} from "./Index.js";
import GPTSearchBar from "./GPTSearchBar";
import GPTSearchResult from "./GPTSearchResult";

const GPTMain = () => {
  return (
    <div className="relative bg-signup-img overflow-hidden min-h-[100vh]">
      <GPTSearchBar />
      <GPTSearchResult />
    </div>
  );
};

export default GPTMain;
