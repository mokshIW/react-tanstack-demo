import React, { useState } from "react";
import { useProjects } from "../services/queries";

export default function Projects() {
  const [page, setPage] = useState(1);

  const { data, isPending, error, isError, isPlaceholderData, isFetching } =
    useProjects(page);

  return (
    <div className="flex flex-col items-center justify-center w-full p-4">
      <h1 className="text-4xl font-bold text-gray-100">Projects</h1>
      {isPending ? (
        <div></div>
      ) : isError ? (
        <div>Error: {error.message}</div>
      ) : (
        <div>
          {data.map((project) => (
            <div
              key={project.id}
              className="flex flex-col items-center justify-center w-full p-2 m-4 bg-slate-800 rounded-lg"
            >
              <h2 className="text-xl font-bold">{project.name}</h2>
            </div>
          ))}
        </div>
      )}
      <span className="p-2 bg-indigo-300 text-indigo-700 font-bold rounded-md my-2">
        Current Page: {page}
      </span>
      <div className="flex flex-row items-center justify-center gap-4">
        <button
          className="p-2 bg-purple-300 text-purple-700 font-bold rounded-md my-2"
          onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
        >
          Previous Page
        </button>
        <button
          className="p-2 bg-emerald-300 text-emerald-700 font-bold rounded-md my-2"
          onClick={() => {
            if (!isPlaceholderData) {
              setPage((prev) => prev + 1);
            }
          }}
          disabled={isPlaceholderData}
        >
          Next Page
        </button>
      </div>

      {isFetching ? <div>Fetching...</div> : null}
    </div>
  );
}
