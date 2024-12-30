import React from "react";
import { useTodos, useTodosIds } from "../services/queries";
import { useIsFetching } from "@tanstack/react-query";

export default function Todo() {
  //   const { data, isPending, isError } = useTodosIds();
  const todosIdsQuery = useTodosIds();

  //   if (todosIdsQuery.isPending) {
  //     return <div>Loading...</div>;
  //   }

  //   if (todosIdsQuery.isError) {
  //     return <div>Error: {todosIdsQuery.error.message}</div>;
  //   }

  const isFetching = useIsFetching();

  const todosQueries = useTodos(todosIdsQuery.data);

  return (
    <div className="flex  items-start justify-center gap-6">
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-2200">useTodosIds</h1>
        {/* .fetchStatus is about the function of the query */}
        <p className="p-4 font-bold text-green-800 bg-green-400 rounded-2xl my-4">
          Query function status: {todosIdsQuery.fetchStatus}
        </p>

        {/* .status is about the query data */}
        <p className="p-4 font-bold text-yellow-800 bg-yellow-400 rounded-2xl my-4">
          Query data status: {todosIdsQuery.status}
        </p>

        {/* useIsFetching() */}
        <p className="p-4 font-bold text-blue-800 bg-blue-400 rounded-2xl my-4">
          Query data status: {isFetching}
        </p>

        {todosIdsQuery.data?.map((id) => (
          <p key={id}>id: {id}</p>
        ))}
      </div>
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-2200">useTodos</h1>

        {/* useIsFetching() */}
        <p className="p-4 font-bold text-blue-800 bg-blue-400 rounded-2xl my-4">
          Query data status: {isFetching}
        </p>

        <ul>
          {todosQueries.map(({ data }) => (
            <li key={data?.id}>
              <strong>ID:</strong> {data?.id} - <strong>Title:</strong>{" "}
              {data?.title}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
