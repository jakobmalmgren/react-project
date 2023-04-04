import { CgCloseO } from "react-icons/cg";
import css from "./SignInPage.module.css";
import Button from "../components/Button";

function SignInPage({ setOpenModal }) {
  return (
    <form action="" className={css.formLogin}>
      <div className={css.formHeader}>
        <h2>LOG IN</h2>
        <CgCloseO
          onClick={() => {
            setOpenModal(false);
          }}
          className={css.formClosingIcon}
        ></CgCloseO>
      </div>
      <div className={css.formLoginWrapper}>
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Password" />

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
  );
}

export default SignInPage;
