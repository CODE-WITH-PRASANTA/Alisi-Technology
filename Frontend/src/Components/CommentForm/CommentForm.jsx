import "./CommentForm.css";

export default function CommentForm() {
  return (
    <section className="comment-wrapper">
      <div className="comment-container">
        <h2>Leave a Comment</h2>

        <p className="comment-sub">
          Your email address will not be published. Required fields are marked *
        </p>

        <textarea placeholder="Enter Your Comments" />

        <div className="comment-row">
          <input type="text" placeholder="Enter Name" />
          <input type="email" placeholder="Enter Email" />
          <input type="text" placeholder="Enter Website" />
        </div>

        <label className="save-info">
          <input type="checkbox" />
          Save my name, email, and website in this browser for the next time I
          comment.
        </label>

        <button className="post-btn">
          Post Comment
          <span>↗</span>
        </button>
      </div>
    </section>
  );
}
