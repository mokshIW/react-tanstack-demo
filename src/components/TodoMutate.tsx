import { SubmitHandler, useForm } from "react-hook-form";
import {
  useCreateTodo,
  useUpdateTodo,
  useDeleteTodo as useDeleteTodoMutation,
} from "../services/mutations";
import { Todo } from "../types/todo";
import { useTodos, useTodosIds } from "../services/queries";

export default function TodoMutate() {
  const todosIdsQuery = useTodosIds();
  const createTodoMutation = useCreateTodo();
  const updateTodoMutation = useUpdateTodo();
  const deleteTodoMutation = useDeleteTodoMutation();

  const todosQueries = useTodos(todosIdsQuery.data);

  const handleCreateTodoSubmit: SubmitHandler<Todo> = (data) => {
    createTodoMutation.mutate(data);
  };

  const handleMarkAsDoneSubmit = (data: Todo | undefined) => {
    if (data) {
      updateTodoMutation.mutate({ ...data, checked: true });
    }
  };

  const handleDeleteTodo = async (id: number) => {
    await deleteTodoMutation.mutateAsync(id);
    console.log("Deleted successfully");
  };

  const { register, handleSubmit } = useForm<Todo>();

  return (
    <div className="flex items-start justify-center gap-6 my-4">
      {/* New Todo */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-2200">New Mutations</h1>
        <form
          onSubmit={handleSubmit(handleCreateTodoSubmit)}
          className="flex flex-col gap-2 mt-4"
        >
          <input
            placeholder="Title"
            {...register("title")}
            className="text-gray-900 rounded-lg px-2"
          />
          <input
            placeholder="Description"
            {...register("description")}
            className="text-gray-900 rounded-lg px-2"
          />
          <input
            type="submit"
            disabled={createTodoMutation.isPending}
            value={createTodoMutation.isPending ? "Creating..." : "Create"}
            className="p-2 rounded-full bg-blue-600 text-white my-2 shadow-lg disabled:bg-yellow-400 disabled:cursor-not-allowed disabled:text-yellow-700"
          />
        </form>
      </div>

      {/* Update Todo */}
      <div className="flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold text-gray-2200">Update Todo:</h1>

        <ul>
          {todosQueries.map(({ data }, index) => (
            <li key={data?.id || `fallback-key-${index}`}>
              <span>
                <strong>ID:</strong> {data?.id} - <strong>Title:</strong>{" "}
                {data?.title} - <strong>Description:</strong>{" "}
                {data?.description}
              </span>
              <div className="flex items-center justify-center gap-2">
                <button
                  onClick={() => handleMarkAsDoneSubmit(data)}
                  disabled={data?.checked}
                  className="p-1 mx-4 rounded-md bg-green-600 text-white my-2 shadow-lg disabled:bg-yellow-400 disabled:cursor-not-allowed disabled:text-yellow-700"
                >
                  {data?.checked ? "Done" : "Mark as Done"}
                </button>
                {data && data.id && (
                  <button
                    onClick={() => handleDeleteTodo(data?.id!)}
                    className="p-1 mx-4 rounded-md bg-red-600 text-white my-2 shadow-lg disabled:bg-yellow-400 disabled:cursor-not-allowed disabled:text-yellow-700"
                  >
                    Delete
                  </button>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
function useDeleteTodo() {
  throw new Error("Function not implemented.");
}
