 import "./UploadButton.scss"
 function UploadButton(){
   return(
<div className="upload-button">
        <input type="file" className="input" />
        <label htmlFor="img" className="input-label"> UPLOAD </label>
        {/* <button id="button" name="button" value="Upload" className="upload">
          Upload
        </button> */}
      </div>
   )
 }

 export default UploadButton;