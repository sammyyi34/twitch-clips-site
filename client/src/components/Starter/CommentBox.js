import React, { useState } from 'react';
import moment from 'moment';
import './CommentBox.css';

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
    <div className="w-1/2 mx-auto">
      <h2 className="text-center text-2xl mb-4 text-white">Place your comments here</h2>
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
        <button type="submit" className="bg-blue-500 text-white rounded-lg px-4 py-2">
          {editMode ? 'Save Comment' : 'Add Comment'}
        </button>
      </form>
      <div className="mt-4">
        <h3 className="text-center text-xl mb-2 text-white">Comments</h3>
        {comments.map((comment, index) => (
          <div key={index} className="mb-2 border-b border-gray-300">
            <p className="text-white">{comment}</p>
            <p className="text-sm text-gray-500 mt-1">{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
            <div className="flex justify-end">
              <button
                onClick={() => handleEditComment(index)}
                className="text-blue-500 text-sm font-medium mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDeleteComment(index)}
                className="text-red-500 text-sm font-medium"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CommentBox;
