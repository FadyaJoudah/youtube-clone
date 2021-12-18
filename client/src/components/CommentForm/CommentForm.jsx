import Avatar from "../Avatar/Avatar";
import Button from "../Button/Button";
import AvatarImage from "../../assets/Images/Mohan-muruge.jpg";
import "./CommentForm.scss";

function CommentForm() {
  return (
    <div className="comment-form">
      <div className="comment-form__container">
        <div className="comment-form__img">
          <Avatar src={AvatarImage} />
        </div>
        <form method="get" className="comment-form__section">
          <label htmlFor="comment" className="comment-form__label">
            JOIN THE CONVERSATION
          </label>
          <div className="wrapper">
            <textarea
              placeholder="Add a new Comment"
              type="text area"
              className="comment-form__text"
              id="comment"
              required=""
            ></textarea>
            <Button name="COMMENT" icon={<i className="comment-icon"></i>} />
          </div>
        </form>
      </div>
    </div>
  );
}

export default CommentForm;
