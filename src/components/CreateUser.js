import { useState } from "react";

function CreateUser(props) {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");

  console.log(props);
  function createUser(e) {
    e.preventDefault();
    let user = { password: password, username: userName, email: email };
    localStorage.setItem("user", JSON.stringify(user));
    props.setLoggedIn(true);
  }

  return (
    <form>
      <div className="content_wrapper">
        <h1>Create User</h1>
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
              <label>Email</label>
            </div>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              name="email "
              placeholder="Email"
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
          <button onClick={(e) => createUser(e)}>Submit</button>
        </div>
      </div>
    </form>
  );
}

export default CreateUser;
