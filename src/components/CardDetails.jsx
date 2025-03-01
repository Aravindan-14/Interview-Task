import React, { useContext, useEffect } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import NewsContext from "../utils/NewsContext";

const CardDetails = () => {
  const { id } = useParams(); // Retrieve the `id` from the URL
  const location = useLocation();
  const navigate = useNavigate(); // Initialize useNavigate
  const { articleData } = location.state || {};
  const { setShowPage } = useContext(NewsContext);

  useEffect(() => {
    setShowPage(false);
  }, []);

  return (
    <div>
      <button
        onClick={() => navigate(-1)} // Go back to the previous page
        className=" mt-4 ml-4"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-11"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
      </button>
      <div className="max-w-8xl mx-auto mt-4 p-6 bg-white shadow-lg rounded-lg border border-gray-300 flex-col flex md:flex-row items-start gap-6">
        <img
          src={articleData?.urlToImage}
          alt={articleData?.title}
          className="w-full md:w-1/2 h-auto rounded-md"
        />
        <div className="w-full md:w-2/3">
          <h1 className="text-4xl font-bold mb-3">{articleData?.title}</h1>
          <p className="text-gray-600 text-sm mb-3">
            By {articleData?.author} |{" "}
            {new Date(articleData?.publishedAt).toDateString()}
          </p>
          <p className="text-lg mb-4">{articleData?.description}</p>
          <p className="text-gray-800">{articleData?.content}</p>
          <a
            href={articleData?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline mt-4 inline-block"
          >
            Read more on The Washington Post
          </a>
        </div>
      </div>
    </div>
  );
};

export default CardDetails;
