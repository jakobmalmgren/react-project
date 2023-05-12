import { CgCloseO } from "react-icons/cg";
import { AiOutlineMail } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import css from "./SignInPage.module.css";
import { Link } from "react-router-dom";

function SignInPage(props) {
  return (
    <div className={props.openSignIn ? css.active : css.containerWrapper}>
      <div className={css.overlay} onClick={props.handleSignIn}></div>
      <form action="" className={css.formLogin}>
        <div className={css.formHeader}>
          <h2>SIGN IN</h2>
          <CgCloseO
            onClick={props.handleSignIn}
            className={css.formClosingIcon}
          ></CgCloseO>
        </div>
        <div className={css.formLoginWrapper}>
          <div className={css.mail}>
            <input
              type="text"
              placeholder="Email"
              className={css.formLoginInput}
            />
            <div className={css.iconWrapper}>
              <AiOutlineMail className={css.icon}></AiOutlineMail>
            </div>
          </div>
          <div className={css.password}>
            <input
              type="text"
              placeholder="Password"
              className={css.formLoginInput}
            />
            <div className={css.iconWrapper}>
              <RiLockPasswordLine className={css.icon}></RiLockPasswordLine>
            </div>
          </div>

          <div className={css.rememberDataWrapper}>
            <div className={css.rememberMeWrapper}>
              <input type="checkbox" className={css.formInputCheckbox}></input>
              <p>Remember me</p>
            </div>

            <p>Forgot the password?</p>
          </div>
          <button
            className={css.signInPageBtn}
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            SIGN IN
          </button>
          <Link to="/CreateAccountPage">
            <button
              className={css.signInPageBtn}
              onClick={() => {
                props.handleSignIn();
              }}
            >
              CREATE ACCOUNT
            </button>
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignInPage;
