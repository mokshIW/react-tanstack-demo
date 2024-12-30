import TodoQuery from "./components/TodoQuery";
import TodoMutate from "./components/TodoMutate";
import Projects from "./components/Projects";
import Products from "./components/Products";

function App() {
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen pt-10 bg-slate-900 text-white">
      {/* <Projects /> */}
      {/* <TodoQuery /> */}
      {/* <TodoMutate /> */}
      <Products />
    </div>
  );
}

export default App;
