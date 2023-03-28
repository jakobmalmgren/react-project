import { CgClose } from "react-icons/cg";
import css from "./SignInPage.module.css";

function SignInPage({ setOpenModal }) {
  return (
    <form action="" className={css.formLogin}>
      <div className={css.formHeader}>
        <h2>LOG IN</h2>
        <CgClose
          onClick={() => {
            setOpenModal(false);
          }}
          className={css.formClosingIcon}
        ></CgClose>
      </div>
      <div className={css.formLoginWrapper}>
        <input type="text" placeholder="email" />
        <input type="text" placeholder="password" />

        <div className={css.rememberDataWrapper}>
          <div>
            <input type="checkbox" className={css.formInputCheckbox}></input>
            <p>Remember me</p>
          </div>
          <p>Forgot the password?</p>
        </div>
        <button className={css.formBtn}>LOG IN</button>
        <button className={css.formBtn}>CREATE ACCOUNT</button>
      </div>
    </form>
  );
}

export default SignInPage;
