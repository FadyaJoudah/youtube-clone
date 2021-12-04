import "./InputField.scss";
function InputField({ placeholder }) {
  return (
    <form className="search-form" action="action_page.php">
      <input
        type="text"
        placeholder={placeholder}
        name="search"
        className="search-input"
      />
      <button className="search-button" type="submit">
        <i className=" fa fa-search"></i>
      </button>
    </form>
  );
}

export default InputField;
