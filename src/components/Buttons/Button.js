import css from "./Button.module.css";
function Button(props) {
  return (
    <button className={css.btn} onClick={props.handleMyShoppingCartPage}>
      {props.content}
    </button>
  );
}

export default Button;
