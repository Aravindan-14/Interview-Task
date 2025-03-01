import { createContext, use, useState } from "react";

const NewsContext = createContext();

export const NewsProvider = ({ children }) => {
  const [Navigation, setNavigation] = useState("All");
  const [newsList, setNewsList] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [selectedNews, setSelectedNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [showPage,setShowPage]=useState(true)

  return (
    <NewsContext.Provider
      value={{
        Navigation,
        setNavigation,
        setNewsList,
        newsList,
        searchInput,
        setSearchInput,
        selectedNews,
        setSelectedNews,
        loading,
        setLoading,
        showPage,setShowPage
      }}
    >
      {children}
    </NewsContext.Provider>
  );
};

export default NewsContext;
