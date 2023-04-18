import axios from "axios";
import React, { useEffect, useState } from "react";

const residetsStatus = {
  Alive: "bg-green-500",
  Dead: "bg-red-500",
  unknow: "bg.gray-500"
}

const ResidenCard = ({ resident }) => {
  const [residentInfo, setResidentInfo] = useState();

  useEffect(() => {
    axios
      .get(resident)
      .then((res) => setResidentInfo(res.data))
      .catch((err) => err);
  }, []);
  return (
    <article>
      <div className="relative rounded-3xl border-8 border-solid border-red-950 w-40 mx-auto">
        <img className="rounded-3xl border-8 border-solid border-red-950 overflow-hidden" src={residentInfo?.image} alt="" />
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-[#020A02]/60 text-white p-1 px-2 flex gap-2 items-center rounded-sm">
          <div className={`w-3 h-3 ${residetsStatus[residentInfo?.status]} rounded-full`}></div>
          <span>{residentInfo?.status}</span>
        </div>
      </div>
      <section className="rounded-3xl border-8 border-solid border-red-950">
        <div className="z-10 relative"><b><h1 className="text-red-950 text-center text-2xl pb-4 pt-4 bg-yellow-200 rounded-2xl ">{residentInfo?.name}</h1></b></div>
        <ul className="p-3 bg-[#C9BEDC] translate-y-[-10px] z-0 mb-[-10px] rounded-b-2xl ">
          <li>
            <b><span className="text-red-950">Species: </span></b>
            <b><span>{residentInfo?.species}</span></b>
          </li>
          <li>
            <b><span className="text-red-950">Origin: </span></b>
            <b><span>{residentInfo?.origin.name}</span></b>
          </li>
          <li>
            <b><span className="text-red-950">Times appear: </span></b>
            <b><span>{residentInfo?.episode.length}</span></b>
          </li>
        </ul>
      </section>
    </article>
  );
};

export default ResidenCard;
