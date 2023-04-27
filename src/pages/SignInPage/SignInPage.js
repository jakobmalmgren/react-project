import { CgCloseO } from "react-icons/cg";
import css from "./SignInPage.module.css";
import Button from "../../components/Buttons/Button";

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
          <input
            type="text"
            placeholder="Email"
            className={css.formLoginInput}
          />
          <input
            type="text"
            placeholder="Password"
            className={css.formLoginInput}
          />

          <div className={css.rememberDataWrapper}>
            <div className={css.rememberMeWrapper}>
              <input type="checkbox" className={css.formInputCheckbox}></input>
              <p>Remember me</p>
            </div>

            <p>Forgot the password?</p>
          </div>
          <Button content="SIGN IN"></Button>
          <Button content="CREATE ACCOUNT"></Button>
        </div>
      </form>
    </div>
  );
}

export default SignInPage;
