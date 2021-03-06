import "./Button.scss";
function Button({ name, type, icon, onClick }) {
  if (type === "input") {
    return (
      <div onClick={onClick} className="input-button">
        <input type="file" className="input-button__input" id="input" />
        <label htmlFor="video" className="input-button__input-label">
          <i className="input-button__icon"> </i>
          {name}
        </label>
      </div>
    );
  } else {
    return (
      <div onClick={onClick}>
        <button type="submit" value="comment" className="button">
          {icon}
          {name}
        </button>
      </div>
    );
  }
}

export default Button;
