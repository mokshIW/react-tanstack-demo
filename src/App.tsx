import TodoQuery from "./components/TodoQuery";
import TodoMutate from "./components/TodoMutate";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen pt-10 bg-slate-900 text-white">
      <Projects />
      <TodoQuery />
      <TodoMutate />
    </div>
  );
}

export default App;
