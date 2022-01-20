import { Link } from "react-router-dom";

function Header(props) {
  function logout() {
    props.setLoggedIn(false);
  }
  return (
    <div className="nav">
      <ul>
        {!props.loggedIn ? (
          <li>
            <Link to="/login" className="link">
              Log in
            </Link>
          </li>
        ) : (
          <li>
            <Link to="/login" onClick={() => logout()} className="link">
              Log out
            </Link>
          </li>
        )}
        <li>
          <Link to="/AboutUs" className="link">
            About Us
          </Link>
        </li>
        <li>
          <Link to="/CreateUser" className="link">
            Create User
          </Link>
        </li>
        {props.loggedIn && (
          <li>
            <Link to="/ImagePage" className="link">
              Recipes
            </Link>
          </li>
        )}
        {props.loggedIn && (
          <li>
            <Link to="/Bio" className="link">
              Bio
            </Link>
          </li>
        )}
      </ul>
    </div>
  );
}
export default Header;
