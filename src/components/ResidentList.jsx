import React, { useEffect, useState } from "react";
import ResidenCard from "./ResidenCard";

const ResidentList = ({ location }) => {
  const [currentPage, setCurrentPage] = useState(1)

  const RESIDENTS_PER_PAGE = 20

  const arrayPages = []

  const quantityPages = Math.ceil(location?.residents.length / RESIDENTS_PER_PAGE)

  for (let i = 1; i <= quantityPages; i++) {
    arrayPages.push(i)
  }


  const startCut = currentPage * RESIDENTS_PER_PAGE - RESIDENTS_PER_PAGE

  const endCut = currentPage * RESIDENTS_PER_PAGE

  const residents = location?.residents;

  useEffect(() => {
    setCurrentPage(1)
  }, [location])
  return (
    <>
      <section className="p-4 grid gap-6 auto-rows-auto grid-cols-[repeat(auto-fill,_minmax(220px,_1fr))] max-w-[1000px] mx-auto">
        {residents?.slice(startCut, endCut).map((resident) => (
          <ResidenCard key={resident} resident={resident} />
        ))}
      </section>
      <ul className="flex gap-4 justify-center py-4 text-red-600 text-2xl flex-wrap">
        {
          arrayPages.map(page => <li onClick={() => setCurrentPage(page)} className={`p-3 cursor-pointer rounded-md ${page === currentPage && "bg-yellow-200 border-4 border-solid border-red-950 text-red-950 font-bold"}`} key={page}>{page}</li>)
        }

      </ul>
    </>

  );
};

export default ResidentList;
