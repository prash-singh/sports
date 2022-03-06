import React from "react";
import MatchCard from "../Components/CricketComponents/MatchCard";
import matchData from "../Components/Database/cricketMatch.json";

function Cricket() {
  return (
    <>
      <MatchCard teamData={matchData.team} />
    </>
  );
}

export default Cricket;
