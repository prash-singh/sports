import "./App.css";
import React from "react";
import Cricket from "./Pages/Cricket";
import Football from "./Pages/Football";
import Basketball from "./Pages/Basketball";
import Kabaddi from "./Pages/Kabaddi";
import Error from "./Pages/Error";
import matchData from "./Components/Database/matchDetails.json";
import Players from "./Pages/Players";
import MatchDetails from "./Components/CricketComponents/MatchDetails";
import ScoreCard from "./Components/CricketComponents/ScoreCard";
import Card from "./Components/Card";
import Header from "./Components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Card />} />
          <Route path="/cricket" element={<Cricket />} />
          <Route path="/football" element={<Football />} />
          <Route path="/basketball" element={<Basketball />} />
          <Route path="/kabaddi" element={<Kabaddi />} />
          <Route path="/scorecard/:match" element={<ScoreCard />} />
          <Route path="/player/:name" element={<Players />} />
          <Route
            path="/cricket/:id"
            element={<MatchDetails teamData={matchData.team} />}
          />
          <Route path="*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
