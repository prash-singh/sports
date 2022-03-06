import React, { useState, useEffect } from "react";
import { IoTimeSharp } from "react-icons/io5";
import { GiBurningDot } from "react-icons/gi";
import { BiTimer } from "react-icons/bi";
import { Link } from "react-router-dom";
// import { GiFinishLine } from "react-icons/gi";

function MatchCard({ teamData }) {
  const [liveMatch, setLiveMatch] = useState([]);
  const [upcomingMatch, setUpcomingMatch] = useState([]);
  const [finishedMatch, setFinishedMatch] = useState([]);

  useEffect(() => {
    setLiveMatch(teamData.filter((match) => match.status === "Live"));
    setUpcomingMatch(teamData.filter((match) => match.status === "Upcoming"));
    setFinishedMatch(teamData.filter((match) => match.status === "Finished"));
  }, [teamData]);
  return (
    <>
      {/* Ongoing Match */}
      <div className="w-3/4 border-3 border-gray-600 bg-red-300 mx-auto rounded-md my-4 p-2">
        {liveMatch.map((match) => (
          <Link
            to={`/cricket/${match.id}`}
            className="no-underline text-black"
            key={match.id}
          >
            <div className="shadow-md border-2 border-red-700 bg-white my-1 hover:cursor-pointer hover:shadow-md rounded-md hover:shadow-black p-4 justify-evenly flex flex-col">
              <div className="w-full justify-center place-items-center flex flex-1">
                <GiBurningDot color="red" />
                <p className="text-red-500 font-bold m-0">{match.status}</p>
              </div>
              <div className=" flex flex-col flex-auto">
                <div className="flex justify-between place-items-center">
                  <div>
                    <span>{match.teamA}</span>
                    <p>
                      {match.scoreA} ({match.overA})
                    </p>
                  </div>
                  <div>
                    <span>{match.matchType}</span>
                  </div>
                  <div>
                    <span>{match.teamB}</span>
                    <p>
                      {match.scoreB} ({match.overB})
                    </p>
                  </div>
                </div>
                <div className="justify-center flex">
                  <span className="inline self-center">{match.toss}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* Upcoming Matches */}
      <div className="w-3/4 border-3 border-gray-600 bg-orange-300 mx-auto rounded-md my-4 p-2">
        {upcomingMatch.map((match) => (
          <Link
            to={`/cricket/${match.id}`}
            className="no-underline text-black"
            key={match.id}
          >
            <div className="shadow-md border-2 border-orange-700 bg-white my-1 hover:cursor-pointer hover:shadow-md rounded-md hover:shadow-black p-4 justify-evenly flex flex-col">
              <div className="w-full justify-center place-items-center flex flex-1">
                <IoTimeSharp color="orange" />
                <p className="text-orange-600 font-bold m-0">{match.status}</p>
              </div>
              <div className=" flex flex-col flex-auto">
                <div className="flex justify-between place-items-center">
                  <div>
                    <span>{match.teamA}</span>
                    <p>
                      {match.scoreA} ({match.overA})
                    </p>
                  </div>
                  <div>
                    <span>{match.matchType}</span>
                  </div>
                  <div>
                    <span>{match.teamB}</span>
                    <p>
                      {match.scoreB} ({match.overB})
                    </p>
                  </div>
                </div>
                <div className="justify-center flex">
                  <span className="inline self-center">
                    Venue: {match.venue}
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {/* Finished Matches */}
      <div className="w-3/4 border-3 border-gray-600 bg-green-300 mx-auto my-4 rounded-md p-2">
        {finishedMatch.map((match) => (
          <Link
            to={`/cricket/${match.id}`}
            className="no-underline text-black"
            key={match.id}
          >
            <div className="shadow-md border-2 border-green-700 bg-white my-1 hover:cursor-pointer hover:shadow-md rounded-md hover:shadow-black p-4 justify-evenly flex flex-col">
              <div className="w-full justify-center place-items-center flex flex-1">
                <BiTimer color="green" size={24} />
                {/* <GiFinishLine color="green" /> */}
                <p className="text-green-700 font-bold m-0">{match.status}</p>
              </div>
              <div className=" flex flex-col flex-auto">
                <div className="flex justify-between place-items-center">
                  <div>
                    <span>{match.teamA}</span>
                    <p>
                      {match.scoreA} ({match.overA})
                    </p>
                  </div>
                  <div>
                    <span>{match.matchType}</span>
                  </div>
                  <div>
                    <span>{match.teamB}</span>
                    <p>
                      {match.scoreB} ({match.overB})
                    </p>
                  </div>
                </div>
                <div className="justify-center flex">
                  <span className="inline self-center">{match.toss}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default MatchCard;
