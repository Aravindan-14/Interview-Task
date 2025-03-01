import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { NewsProvider } from "./utils/NewsContext";
import MainPage from "./pages/MainPage";
import SportsNews from "./components/SportsNews";
import HomePage from "./components/HomePage";
import BusinessNews from "./components/BusinessNews";
import TechnologyNews from "./components/TechnologyNews";
import CardDetails from "./components/CardDetails";
function App() {
  return (
    <NewsProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />}>
            <Route index element={<HomePage />} />
            {/* <Route path="contact" element={<Contact />} />  */}
            <Route path="/Sports/:category" element={<SportsNews />} />
            <Route path="/Business/:category" element={<BusinessNews />} />
            <Route path="/Technology/:category" element={<TechnologyNews />} />
            <Route path="/CardDetails/:id" element={<CardDetails />} />
          </Route>
        </Routes>
      </Router>
    </NewsProvider>
  );
}

export default App;
