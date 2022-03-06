import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Team from "./Team";
import MidCard from "./MidCard";

function MatchDetails({ teamData }) {
  const { id } = useParams();
  const [matchDetails, setMatchDetails] = useState([]);

  useEffect(() => {
    setMatchDetails(teamData.filter((match) => match.id === Number(id)));
  }, [teamData, id]);

  return (
    <>
      <div className="border-2 border-black w-full h-10 flex justify-center bg-blue-500 my-2 text-white font-bold text-xl">
        <p className="align-middle inline">South Africa vs India, 1st T20i</p>
      </div>
      <div className="flex justify-between">
        {matchDetails.map((match) => (
          <Team
            key={match.teamA}
            teamPlayers={match.teamAPlayers}
            teamName={match.teamA}
          />
        ))}
        <MidCard data={matchDetails} />
        {matchDetails.map((match) => (
          <Team
            key={match.teamB}
            teamPlayers={match.teamBPlayers}
            teamName={match.teamB}
          />
        ))}
      </div>
    </>
  );
}

export default MatchDetails;
