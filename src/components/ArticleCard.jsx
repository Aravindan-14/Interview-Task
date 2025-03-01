import React from "react";
import { Link } from "react-router-dom";

const ArticleCard = React.memo(({ data }) => {
  const DateFormate = (isoDate) => {
    const date = new Date(isoDate);
    const formattedDate = date.toLocaleDateString("en-GB").slice(0, 8);
    return formattedDate;
  };
  const { source: { name: sourceName}, urlToImage, title, description, publishedAt } = data;
  return (
<Link to={`/CardDetails/${sourceName}`} state={{ articleData: data }}>
  <article className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col h-[450px]" id = {`article-${sourceName}`}>
        {/* Image Section */}
        <img
          src={urlToImage}
          alt={title}
          className="w-full h-48 object-cover"
        />
        
        {/* Content Section */}
        <div className="p-6 flex flex-col flex-grow">
          <h3 className="mt-2 text-xl font-semibold line-clamp-2">{title}</h3>
          <p className="mt-3 text-gray-600 flex-grow line-clamp-3">{description}</p>
          
          {/* Footer Section */}
          <div className="mt-auto flex items-center justify-between">
            <span className="text-sm text-gray-500">
              Published On: {DateFormate(publishedAt)}
            </span>
            <button className="rounded-button text-custom hover:bg-custom/10 px-4 py-2">
              Read More
            </button>
          </div>
        </div>
      </article>
    </Link>
  );
});

export default ArticleCard;
