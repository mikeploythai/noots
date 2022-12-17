import { useEffect, useState } from "react";
import { logIn } from "./components/api/auth-functions";
import Dashboard from "./components/dashboard";
import Footer from "./components/footer";
import GapFill from "./components/gap-fill";
import Loading from "./components/loading";
import Nav from "./components/nav";

function App() {
  const [auth, setAuth] = useState(false);
  const [loading, setLoading] = useState(true);
  const [opacity, setOpacity] = useState("0");

  useEffect(() => {
    setTimeout(() => setLoading(false), 2250);
    setTimeout(() => setOpacity("100"), 2500);
  }, []);

  const username = window.localStorage.getItem("username");
  const password = window.localStorage.getItem("password");

  if (username && password) {
    logIn(username, password, setAuth);
  }

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div
          className={`grid grid-rows-[min-content_1fr_min-content] auto-cols-fr min-h-screen transition opacity-${opacity}`}
        >
          <Nav auth={auth} setAuth={setAuth} />
          <GapFill />
          <Dashboard auth={auth} />
          <Footer />
        </div>
      )}
    </>
  );
}

export default App;
