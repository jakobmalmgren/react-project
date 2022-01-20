import { useState } from "react";

function LogIn(props) {
  const [errorMessage, setErrorMessage] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  function login(e) {
    e.preventDefault();
    let user = JSON.parse(localStorage.getItem("user"));

    if (user === null) {
      setErrorMessage(true);
    } else if (user !== null) {
      if (user.username === userName && user.password === password) {
        props.setLoggedIn(true);
        setErrorMessage(false);
      } else setErrorMessage(true);
    }
  }
  return (
    <div>
      <form>
        <div className="content_wrapper">
          <h1>Log In</h1>
          <div className="form_wrapper">
            <div className="complete_form">
              <div className="field">
                <label>Username</label>
              </div>
              <input
                onChange={(e) => setUserName(e.target.value)}
                type="text"
                name="username "
                placeholder="Username"
              />

              <div className="field">
                <label>Password</label>
              </div>
              <input
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                name="password "
                placeholder="Password"
              />
            </div>
          </div>
          <div className="button">
            <button onClick={(e) => login(e)}>Submit</button>
          </div>
        </div>
      </form>
      {errorMessage && (
        <div className="errormessage"> Wrong details, try again</div>
      )}
    </div>
  );
}

export default LogIn;
