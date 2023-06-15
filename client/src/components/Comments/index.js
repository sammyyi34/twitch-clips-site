import React from 'react';
import 'tailwindcss/tailwind.css';

const CommentForm = ({ onCommentSubmit }) => {
    return (
      <div className="border border-gray-300 rounded p-4 w-96">
        <div className="mb-4">
          <h5 className="text-xl font-bold">Post a Comment</h5>
          <div className="mt-2">
            <label htmlFor="commentText" className="block mb-1">Comment:</label>
            <textarea className="form-textarea w-full border border-gray-300 p-2" id="commentText" rows="3"></textarea>
          </div>
        </div>
        <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600" onClick={onCommentSubmit}>
          Post Comment
        </button>
      </div>
    );
  };
