import { useState, useEffect } from "react";
import './App.css';
import './variables/Colors.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { LanguageProvider } from "./contexts/LanguageContext";
import ScrollAuto from "./components/buttons/scrollToTop/ScrollAuto";
import LoadingAnimated from "./components/loading/LoadingAnimated";
import Header from "./components/header/Header";
import ButtonScroll from "./components/buttons/scrollToTop/ButtonScroll";
import ProjectsPage from "./pages/projectsPage/Projects";
import Intro from "./pages/homePage/intro/Intro";

function App() {
  const [loading, setLoading] = useState(true);

  const basename = process.env.REACT_APP_NODE_ENV === "production" ? "/portfolio" : "/";

  return (
    <Router basename={basename}>
      <LanguageProvider>
        <ScrollAuto/>
        {loading ? (
          <LoadingAnimated onFinish={() => setLoading(false)} />
        ) : (
          <MainContent/>
        )}
      </LanguageProvider>
    </Router>
  );
}

function MainContent() {
  
  const location = useLocation();
    useEffect(() => {
    if (location.pathname === "/" && location.state?.scrollTo) {
      const sectionId = location.state.scrollTo;
      const el = document.getElementById(sectionId);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }, [location]);

  return (
    <div className="App">
      {location.pathname === "/" && <Header/>}
      <Routes>
        <Route
          path="/"
          element={
            <div className="main-content">
              <ButtonScroll/>
              <Intro />
            </div>
          }
        />
        <Route path="/projects" element={<ProjectsPage/>}/>
      </Routes>
    </div>
  );
}

export default App;