import React, { useEffect, useState } from "react";
import "./App.css";
import AppContext from "./Context/AppContext";
import routes from "./routes";
import { useRoutes } from "react-router-dom";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
function App() {
  const [isDark, setIsDark] = useState(false);
  const [sidebarMobile, setSidebarMobile] = useState(false);
  const [shopCartMenuMobile, setShopCartMenuMobile] = useState(false);
  const Routes = useRoutes(routes);

  const [isLogedIn, setIsLogedIn] = useState(false);
  const [token, setToken] = useState("");
  
  const [userInfos, setUserInfos] = useState({});

  const login = (userInfos, token) => {
    setToken(token);
    setUserInfos(userInfos);
    setIsLogedIn(true);
    localStorage.setItem("user", JSON.stringify(token));
  };

  const logOut = () => {
    setIsLogedIn(false);
    setToken(null);
    setUserInfos(null);
    localStorage.removeItem("user");
  };

  useEffect(() => {
    const localStorageData = JSON.parse(localStorage.getItem("user"));
    if (localStorageData) {
      fetch(`http://localhost:4000/v1/auth/me`, {
        headers: {
          Authorization: `Bearer ${localStorageData}`,
        },
      })
        .then((res) => res.json())
        .then((result) => {
          setIsLogedIn(true);
          setUserInfos(result);
        });
    } else {
      setIsLogedIn(false);
    }
  }, [token]);

  return (
    <div
      className={
        isDark
          ? "App dark bg-zinc-800 transition-all duration-500"
          : "App bg-gray-100 transition-all duration-500"
      }
      dir="rtl"
    >
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={true}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <AppContext.Provider
        value={{
          isDark,
          setIsDark,
          sidebarMobile,
          setSidebarMobile,
          shopCartMenuMobile,
          setShopCartMenuMobile,
          isLogedIn,
          token,
          userInfos,
          login,
          logOut,
        }}
      >
        {Routes}
      </AppContext.Provider>
    </div>
  );
}

export default App;
