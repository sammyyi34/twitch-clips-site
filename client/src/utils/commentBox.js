import React, { useState } from 'react';

const CommentBox = () => {
  const [comment, setComment] = useState('');

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleCommentSubmit = (event) => {
    event.preventDefault();
    // Perform any necessary actions with the comment
    console.log('Comment submitted:', comment);
    setComment('');
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Comment Box</h5>
        <form onSubmit={handleCommentSubmit}>
          <div className="form-group">
            <textarea
              className="form-control"
              rows="3"
              placeholder="Enter your comment"
              value={comment}
              onChange={handleCommentChange}
            ></textarea>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default CommentBox;