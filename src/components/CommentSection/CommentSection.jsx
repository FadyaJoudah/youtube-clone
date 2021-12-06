import "./CommentSection.scss";
import CommentsList from "../CommentList/CommentList";
import CommentForm from "../CommentForm/CommentForm";

function CommentSection({ commentsData }) {
  return (
    <div>
      <div className="comment-counter"> {commentsData.length} comments</div>
      <CommentForm />
      <CommentsList comments={commentsData} />
    </div>
  );
}
export default CommentSection;
