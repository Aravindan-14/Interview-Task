import React, { useContext } from "react";
import NewsContext from "../utils/NewsContext";
import { Link } from "react-router-dom";

const categories = ["All", "Business", "Sports", "Technology"];

const Navigation = () => {
  const { Navigation, setNavigation,setNewsList,setSelectedNews } = useContext(NewsContext);
  return (
    <div className="max-w-8xl mx-auto px-4">
      <div className="flex space-x-8 py-3 ">
        {categories.map((category, index) => (
          <Link
            to={category == "All" ? "/" : `/${category}/${category}`}
            key={index}
            onClick={() => {
              setNavigation(category);
              setNewsList([]);
        setSelectedNews([]);
                 console.log(category);
            }}
            className={`whitespace-nowrap font-medium ${
              category === Navigation
                ? "text-blue-500 border-blue-600 border-[1px] p-2 rounded-md"
                : "text-gray-500 hover:text-custom p-2"
            }`}
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Navigation;
