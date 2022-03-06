import React from "react";
// import { Link } from "react-router-dom";

function Team({ teamPlayers, teamName }) {
  return (
    <>
      <div className="w-1/6 h-auto border-2 border-blue-500 rounded-md  m-2 bg-white">
        <p className="flex justify-center font-bold">Team: {teamName}</p>
        {teamPlayers.map((player) => (
          //   <Link to={`/player/${player}`} key={player}>
          <p
            key={player}
            className="flex justify-center text-black font-semibold"
          >
            {player}
          </p>
          //   </Link>
        ))}
      </div>
    </>
  );
}

export default Team;
