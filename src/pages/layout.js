import "../style/App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useMemo } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/header/header";
import Background from "../components/background";
import UserContext from "../components/userContext";

function Layout() {
  const [userDisplay, setUserDisplay] = useState("");
  const value = useMemo(() => ({ userDisplay, setUserDisplay }), [userDisplay]);

  return (
    <>
      <Background />

      {/* Header doesn't use UserContext.Provider value directly, but instead updates
       and rerenders when other components (primarily DemoLogIn) change the value */}
      <UserContext.Provider value={value}>
        <Header />
      </UserContext.Provider>

      <main className="mainContainer">
        <UserContext.Provider value={value}>
          <Outlet />
        </UserContext.Provider>
      </main>

      <footer className="footer-container" />
    </>
  );
}

export default Layout;
