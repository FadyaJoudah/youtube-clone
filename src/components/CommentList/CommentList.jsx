import Avatar from "../Avatar/Avatar";
import "./CommentList.scss";
function CommentsList({ comments }) {
  return (
    <section className="comments">
      {comments.map((comment, index) => {
        const commentTime = new Date(comment.timestamp).toLocaleDateString(
          "en-US"
        );
        return (
          <article key={index} className="comments__comment comment">
            <Avatar />
            <div className="comments__content">
              <div className="comments__info">
                <p className="comments__name"> {comment.name}</p>
                <p className="comments__date">{commentTime}</p>
              </div>
              <p className="comments__text">{comment.comment}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
}
export default CommentsList;
