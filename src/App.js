import "./App.css";
import Dashboard from "./components/dashboard";
import Nav from "./components/nav";

function App() {
  return (
    <div className="relative flex flex-col gap-8 p-8 min-h-screen w-screen bg-slate-900 text-slate-100">
      <Nav />
      <Dashboard />
    </div>
  );
}

export default App;
