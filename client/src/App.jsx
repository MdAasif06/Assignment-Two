import { useState } from "react";
import Auth from "./pages/auth";
import Dashboard from "./pages/dashboard";

function App() {
  const [isAuth, setIsAuth] = useState(
    !!localStorage.getItem("token")
  );

  return isAuth ? (
    <Dashboard />
  ) : (
    <Auth onAuth={() => setIsAuth(true)} />
  );
}

export default App;
