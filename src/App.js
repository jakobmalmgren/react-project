import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import AboutUs from "./components/AboutUs";
import LogIn from "./components/LogIn";
import CreateUser from "./components/CreateUser";
import Home from "./components/Home";
import Header from "./components/Header";
import ImagePage from "./components/ImagePage";
import Bio from "./components/Bio";

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  useEffect(() => {
    if (localStorage.getItem("user")) {
      setLoggedIn(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Header setLoggedIn={setLoggedIn} loggedIn={loggedIn}></Header>
      </div>

      <div className="container">
        <Routes>
          <Route path="/AboutUs" exact element={<AboutUs />} />
          <Route
            path="/CreateUser"
            exact
            element={
              <CreateUser setLoggedIn={setLoggedIn} loggedIn={loggedIn} />
            }
          />
          <Route
            path="/login"
            exact
            element={<LogIn setLoggedIn={setLoggedIn} loggedIn={loggedIn} />}
          />

          <Route path="/Imagepage" exact element={<ImagePage />} />

          <Route path="/Bio" exact element={<Bio />} />
          <Route path="/" exact element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
