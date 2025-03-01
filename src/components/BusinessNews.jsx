import axios from "axios";
import React, { useContext, useEffect } from "react";
import NewsContext from "../utils/NewsContext";
import ArticleCard from "./ArticleCard";
import SkeletonCard from "../utils/SkeletonCard";
import { useParams } from "react-router-dom";

const BusinessNews = () => {
  const {
    setNewsList,
    newsList,
    selectedNews,
    setSelectedNews,
    loading,
    setLoading,
    setNavigation,
  } = useContext(NewsContext);
  const { category } = useParams();
  useEffect(() => {
    const FetchAllNews = async () => {
      try {
        setLoading(true);
        setNavigation("Business");
        const res = await axios.get(
          `${process.env.REACT_APP_BASEURL}v2/top-headlines?category=${category}&apiKey=${process.env.REACT_APP_APIKEY}`
        );
        console.log(res);

        if (res.data.status == "ok") {
          setLoading(false);
          const filteredArticles = res.data.articles.filter(
            (article) =>
              article.urlToImage &&
              article.description &&
              article.source.name !== null
          );
          setNewsList(filteredArticles);
          setSelectedNews(filteredArticles);
        }
      } catch (error) {
        console.log(error);
      }
    };
    FetchAllNews();
  }, []);

  console.log(newsList);
  return (
    <>
      <section className="mb-12 px-4">
        {" "}
        <h2 className="text-2xl font-bold mb-6 mt-4">Business News</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
            Array(6)
              .fill(0)
              .map((_, index) => <SkeletonCard key={index} />)
          ) : selectedNews?.length > 0 ? (
            <>
              {selectedNews?.map((data, index) => (
                <ArticleCard key={index} data={data} />
              ))}
            </>
          ) : (
            <div>
              <div className="flex w-screen h-96 justify-center items-center">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-11 text-red-500"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
                    />
                  </svg>
                </span>{" "}
                <h1 className="font-bold ml-5">No Article Found</h1>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default BusinessNews;
