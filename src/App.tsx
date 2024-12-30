import TodoQuery from "./components/TodoQuery";
import TodoMutate from "./components/TodoMutate";

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen pt-10 bg-slate-900 text-white">
      <TodoQuery />
      <TodoMutate />
    </div>
  );
}

export default App;
