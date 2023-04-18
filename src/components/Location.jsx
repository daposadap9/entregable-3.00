import React from "react";

const Location = ({ location }) => {
  return (
    <section className="text-center w-9/12 mx-auto mt-10 mb-10 p-6 bg-yellow-200 rounded-2xl border-8 border-solid border-red-950">
      <h1 className="text-2xl text-red-950">{location?.name}</h1>
      <ul>
        <b><li className="flex justify-center items-center gap-1 mt-3"><h1 className="text-red-950">Type:</h1><span>{location?.type}</span></li></b>
        <b><li className="flex justify-center items-center gap-1 mt-3"><h1 className="text-red-950">Dimension: </h1><span>{location?.dimension}</span></li></b>
        <b><li className="flex justify-center items-center gap-1 mt-3"><h1 className="text-red-950">Population:</h1><span>{location?.residents.length}</span></li></b>
      </ul>
    </section>
  );
};

export default Location;
