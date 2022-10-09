import "./styles/main.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import GameAds from "./components/GameAds";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/game/:gameName" element={<GameAds />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
