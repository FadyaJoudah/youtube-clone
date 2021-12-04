import "./Button.scss";
function Button({ name }) {
  return (
    <div className="button">
      <input type="file" className="button__input" id="input" />
      <label htmlFor="video" className="button__input-label">
        {name}
      </label>
      {/* <button id="button" name="button" value="Upload" className="upload">
          Upload
        </button> */}
    </div>
  );
}

export default Button;
