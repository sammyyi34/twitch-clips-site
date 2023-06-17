import React, { useState } from 'react';

function CommentBox() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim() !== '') {
      if (editMode) {
        // Edit existing comment
        const updatedComments = [...comments];
        updatedComments[editIndex] = newComment;
        setComments(updatedComments);
        setEditMode(false);
        setEditIndex(null);
      } else {
        // Add new comment
        setComments([...comments, newComment]);
      }
      setNewComment('');
    }
  };

  const handleEditComment = (index) => {
    setEditMode(true);
    setEditIndex(index);
    setNewComment(comments[index]);
  };

  const handleDeleteComment = (index) => {
    const updatedComments = [...comments];
    updatedComments.splice(index, 1);
    setComments(updatedComments);
  };

  return (
    <div>
      <h2>Place your comments here</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your message</label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write your thoughts here..."
          value={newComment}
          onChange={handleInputChange}
        ></textarea>
        <br />
        <button type="submit">{editMode ? 'Save Comment' : 'Add Comment'}</button>
      </form>
      <div>
        <h3>Comments</h3>
        {comments.map((comment, index) => (
          <div key={index}>
            <p>{comment}</p>
            <button onClick={() => handleEditComment(index)}>Edit</button>
            <button onClick={() => handleDeleteComment(index)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentBox;
