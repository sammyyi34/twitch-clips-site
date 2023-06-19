import React, { useState } from 'react';
import moment from 'moment';

function CommentBox() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const handleInputChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    if (newComment.trim() !== '') {
      if (editMode) {
       
        const updatedComments = [...comments];
        updatedComments[editIndex] = newComment;
        setComments(updatedComments);
        setEditMode(false);
        setEditIndex(null);
      } else {
       
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

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <button
        className="bg-pink-500 text-white active:bg-pink-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={() => setShowModal(true)}
      >
        Open regular modal
      </button>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              {/* Modal content */}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/* Modal header */}
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                      <form onSubmit={handleFormSubmit}>
        <label htmlFor="message" className="block mb-2 text-sm font-medium text-black">
          Your message
        </label>
        <textarea
          id="message"
          rows="4"
          className="block p-2.5 w-full text-sm text-black bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
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
        <h3 className="text-center text-xl mb-2 text-black">Comments</h3>
        {comments.map((comment, index) => (
          <div key={index} className="mb-2 border-b border-gray-300">
            <p className="text-black">{comment}</p>
            <p className="text-sm text-gray-500 mt-1">{moment().format('MMMM Do YYYY, h:mm:ss a')}</p>
            <div className="flex justify-end">
              <button onClick={() => handleEditComment(index)} className="text-blue-500 text-sm font-medium mr-2">
                Edit
              </button>
              <button onClick={() => handleDeleteComment(index)} className="text-red-500 text-sm font-medium">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}

export default CommentBox;
