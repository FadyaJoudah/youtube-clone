import "./Upload.scss";
import Header from "../../components/Header/Header";
import React from "react";
import Button from "../../components/Button/Button";

function Upload(props) {
  return (
    <>
      <Header />
      <h1 className="upload-title">Upload Video</h1>
      <form action="/action_page.php" method="get" className="upload-form">
        <label htmlFor="title" className="upload-form__title-label">
          TITLE YOUR VIDEO
        </label>
        <input
          className="upload-form__title-input"
          type="text"
          id="title"
          name="title"
        ></input>
        <label className="upload-form__description-label" htmlFor="description">
          ADD A VIDEO DESCRIPTION
        </label>
        <input
          className="upload-form__description-input"
          type="text"
          id="description"
          name="description"
        ></input>
        <div className="button-container">
          <Button name="PUBLISH" icon={<i className="publish__icon"></i>} />
          <button className="cancel-button">CANCEL</button>
        </div>
      </form>
    </>
  );
}

export default Upload;
