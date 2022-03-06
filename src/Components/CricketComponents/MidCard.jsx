import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MidCard({ data }) {
  const { id } = useParams();
  const [matchData, setMatchData] = useState([]);

  useEffect(() => {
    setMatchData(data.filter((match) => match.id === Number(id)));
  }, [data, id]);
  return (
    <div className="h-auto w-3/4 rounded-md border-2 my-2 border-red-500 flex flex-col lg:gap-4 px-2 bg-white">
      {matchData.map((match) => (
        <>
          <div>
            <p className="m-0 my-2 text-red-600 font-semibold">
              {match.result}
            </p>
            <p className="m-0 font-semibold">
              {match.teamA} - {match.scoreA} ({match.overA})
            </p>
            <p className="m-0 font-semibold">
              {match.teamB} - {match.scoreB} ({match.overB})
            </p>
            <p className="m-0 font-thin">CRR: {match.CRR}</p>
            <p className="m-0 font-thin">RR: {match.RR}</p>
          </div>
          <div>
            <table className="w-full">
              <thead>
                <tr>
                  <th>Batting</th>
                  <th>R(B)</th>
                  <th>4s</th>
                  <th>6s</th>
                  <th>SR</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>KL Rahul</td>
                  <td>20(25)</td>
                  <td>3</td>
                  <td>0</td>
                  <td>80</td>
                </tr>
                <tr>
                  <td>Shardul Thakur</td>
                  <td>4(5)</td>
                  <td>1</td>
                  <td>0</td>
                  <td>80</td>
                </tr>
              </tbody>
              <thead>
                <tr>
                  <td>
                    <br />
                  </td>
                </tr>
              </thead>
              <thead>
                <tr>
                  <th>Bowling</th>
                  <th>O</th>
                  {/*Overs */}
                  <th>M</th>
                  {/*Maiden */}
                  <th>R</th>
                  {/*Runs */}
                  <th>W</th>
                  {/*Wickets */}
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Marcos</td>
                  <td>1</td>
                  <td>0</td>
                  <td>4</td>
                  <td>1</td>
                </tr>
                <tr>
                  <td>Rabada</td>
                  <td>3</td>
                  <td>0</td>
                  <td>7</td>
                  <td>0</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div>
            <p className="m-0 my-1">Partnership: 11(10)</p>
            <p className="m-0 my-1">
              Last wkt: R.Ashwin c de Kock b Marco Jansen 4(11) - 142/8 in 16.1
            </p>
            <p className="m-0 my-1">Recent balls:... | 0 0 0 1 2 1</p>
          </div>
          <div>
            <button className="mx-2 p-px px-2 rounded-md border-2 hover:border-opacity-50 border-gray-600 text-blue-600 font-semibold">
              Scorecard
            </button>
            <button className="mx-2 p-px px-2 rounded-md border-2 hover:border-opacity-50 border-gray-600 text-blue-600 font-semibold">
              Refresh
            </button>
          </div>
        </>
      ))}
    </div>
  );
}

export default MidCard;
