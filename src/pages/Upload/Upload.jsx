import "./Upload.scss";
import Header from "../../components/Header/Header";
import React, { Component } from "react";
import Button from "../../components/Button/Button";
import { render } from "@testing-library/react";
import axios from "axios";

class Upload extends Component {
  state = {
    title: "",
    description: "",
    alt: "",
    src: "",
    selectedFile: null,
  };
  handleTitleChange = (event) => {
    this.setSate({
      title: event.target.value,
    });
  };
  handleDescriptionChange = (event) => {
    this.setSate({
      description: event.target.value,
    });
  };

  render() {
    return (
      <>
        <Header />
        <h1 className="upload-title">Upload Video</h1>
        <div className="thumbnail-container">
          <p> VIDEO THUMBNAIL</p>
          <img src={this.state.src} alt={this.state.alt} />
        </div>
        <div className="upload-form__title-container">
          <label htmlFor="title" className="upload-form__title-label">
            TITLE YOUR VIDEO
          </label>
          <input
            className="upload-form__title-input"
            type="text"
            id="title"
            name="title"
            placeholder="Add a title to your videa"
          ></input>
        </div>
        <div className="upload-form__description-container">
          <label
            className="upload-form__description-label"
            htmlFor="description"
          >
            ADD A VIDEO DESCRIPTION
          </label>
          <input
            className="upload-form__description-input"
            type="text"
            id="description"
            name="description"
            placeholder="Add a description to your videa"
          ></input>
        </div>
        <div className="button-container">
          <Button
            type="input"
            name="PUBLISH"
            icon={<i className="publish__icon"></i>}
          />
          <button className="cancel-button">CANCEL</button>
        </div>
      </>
    );
  }
}

// function Upload({ src, alt }) {
//   return (
//     <>
//       <Header />
// <h1 className="upload-title">Upload Video</h1>
// <div className="thumbnail-container">
//   <p> VIDEO THUMBNAIL</p>
//   <img src={src} alt={alt} />
// </div>
//       <form action="/action_page.php" method="get" className="upload-form">
// <div className="upload-form__title-container">
//   <label htmlFor="title" className="upload-form__title-label">
//     TITLE YOUR VIDEO
//   </label>
//   <input
//     className="upload-form__title-input"
//     type="text"
//     id="title"
//     name="title"
//   ></input>
// </div>
// <div className="upload-form__description-container">
//   <label
//     className="upload-form__description-label"
//     htmlFor="description"
//   >
//     ADD A VIDEO DESCRIPTION
//   </label>
//   <input
//     className="upload-form__description-input"
//     type="text"
//     id="description"
//     name="description"
//   ></input>
// </div>
//         <div className="button-container">
//           <Button name="PUBLISH" icon={<i className="publish__icon"></i>} />
//           <button className="cancel-button">CANCEL</button>
//         </div>
//       </form>
//     </>
//   );
// }

export default Upload;
