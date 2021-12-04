import "./Button.scss";
function Button({ name }) {
  return (
    <div className="button">
      <input type="file" className="button__input" id="input" />
      <label htmlFor="video" className="button__input-label">
        <i className="button__icon"> </i>
        {name}
      </label>
    </div>
  );
}

export default Button;
