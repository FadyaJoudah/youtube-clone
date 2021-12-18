import "./InputField.scss";
function InputField({ placeholder }) {
  return (
    <form className="form" action="action_page.php">
      <i className="form__icon"></i>
      <input
        type="text"
        placeholder={placeholder}
        name="search"
        className="form__input"
      />
      <button className="form__button" type="submit"></button>
    </form>
  );
}

export default InputField;
