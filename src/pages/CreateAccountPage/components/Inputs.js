import { useState } from "react";
import css from "./Inputs.module.css";

function Inputs(props) {
  const { label, errormessage, onChange, id, ...inputProps } = props;
  const [focused, setFocused] = useState(false);
  function handleFocus(e) {
    setFocused(true);
  }
  return (
    <div className={css.inputWrapper}>
      <label>{label}</label>
      <input
        className={css.createAccountPageFormLabel}
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus}
        focused={focused.toString()}
      />
      <span>{errormessage}</span>
    </div>
  );
}

export default Inputs;
