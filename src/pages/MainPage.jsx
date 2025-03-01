import React, { useContext } from "react";
import SearchBar from "../components/SearchBar";
import Navigation from "../components/Navigation";
import { Outlet } from "react-router-dom";
import Pagination from "../components/Pagination";
import NewsContext from "../utils/NewsContext";

function MainPage() {
  const { showPage } = useContext(NewsContext);
  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden overflow-x-hidden">
      {/* Fixed Header */}
      <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50">
        <div className="flex items-center justify-center h-16">
          <SearchBar />
        </div>
        <div className="border-t">
          <Navigation />
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col pt-32 w-screen overflow-hidden">
        <div className="flex-1 overflow-auto">
          <Outlet />
          {showPage && <Pagination />}
        </div>
      </div>
    </div>
  );
}

export default MainPage;
