import css from "./Button.module.css";
function Button(props) {
  return <button className={css.btn}>{props.content}</button>;
}

export default Button;
