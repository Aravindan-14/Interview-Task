import React, { useContext, useEffect } from "react";
import NewsContext from "../utils/NewsContext";
import axios from "axios";
import { debounce } from "lodash";

const SearchBar = () => {
  const { setNewsList, newsList,setSelectedNews } = useContext(NewsContext);

  const fetchData = async (query) => {
    try {
      const response = await axios.get(
        `${process.env.REACT_APP_BASEURL}v2/everything?q=${query}&apiKey=${process.env.REACT_APP_APIKEY}`
      );
      setNewsList(response.data.articles
      );
      setSelectedNews(response.data.articles
      );
      console.log(response.data.articles
      );
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const debouncedFetch = debounce(fetchData, 200);
  const handelChange = async (event) => {
    debouncedFetch(event.target.value);
  };
  return (
    <div className="flex-1 max-w-2xl mx-8">
      <div className="relative">
        <input
          type="text"
          placeholder="Search news..."
          className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-custom"
          onChange={(event) => {
            handelChange(event);
          }}
        />{" "}
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
