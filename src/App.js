import { useState } from "react";
import Dashboard from "./components/dashboard";
import Footer from "./components/footer";
import GapFill from "./components/gap-fill";
import Nav from "./components/nav";

function App() {
  const [auth, setAuth] = useState(false);

  return (
    <div className="grid grid-rows-[min-content_1fr_min-content] auto-cols-fr min-h-screen">
      <Nav auth={auth} setAuth={setAuth} />
      <GapFill />
      <Dashboard auth={auth} />
      <Footer />
    </div>
  );
}

export default App;
