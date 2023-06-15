import React from 'react';

const CommentForm = ({ onCommentSubmit }) => {
  return (
    <div className="card" style={{ width: '25rem' }}>
      <div className="card-body">
        <h5 className="card-title">Post a Comment</h5>
        <div className="form-group">
          <label htmlFor="commentText">Comment:</label>
          <textarea className="form-control" id="commentText" rows="3"></textarea>
        </div>
        <button className="btn btn-primary" onClick={onCommentSubmit}>
          Post Comment
        </button>
      </div>
    </div>
  );
};

export default CommentForm;
