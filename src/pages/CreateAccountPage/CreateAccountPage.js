import css from "./CreateAccountPage.module.css";
import { useState } from "react";
import Inputs from "./components/Inputs";

function CreateAccountPage() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmPassword: "",
  });

  const inputs = [
    {
      id: 1,
      name: "username",
      type: "text",
      placeHolder: "username",
      label: "username",
      errormessage:
        "Username should be between 3-16 characters, and should not include any special characters",
      required: true,
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeHolder: "email",
      label: "email",
      errormessage: "It should be a valid email adress",
      required: true,
    },
    {
      id: 3,
      name: "birthday",
      type: "date",
      placeHolder: "birthday",
      label: "birthday",
    },
    {
      id: 4,
      name: "password",
      type: "password",
      placeHolder: "password",
      label: "password",
      errormessage:
        "Password should be minimum 8 characters and include atleast 1 uppercase letter, 1 lowercase letter and 1 special character",
      required: true,
      pattern: "^(?=.{8,})(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+*!=]).*$",
    },

    {
      id: 5,
      name: "confirmPassword",
      type: "password",
      placeHolder: "confirm Password",
      label: "confirm Password",
      errormessage: "Password dont match",
      required: true,
      pattern: values.password,
    },
  ];
  function onChange(e) {
    setValues({ ...values, [e.target.name]: e.target.value });
  }
  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className={css.createAccountPage}>
      <h1>Create Account</h1>
      <div className={css.createAccountPageFormWrapper}>
        <form onSubmit={handleSubmit} className={css.createAccountPageForm}>
          {inputs.map((input) => {
            return (
              <Inputs
                key={input.id}
                {...input}
                values={values[inputs.name]}
                onChange={onChange}
              ></Inputs>
            );
          })}

          <button>submit</button>
        </form>
      </div>
    </div>
  );
}

export default CreateAccountPage;
