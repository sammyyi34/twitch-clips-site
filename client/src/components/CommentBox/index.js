import React, { useState } from 'react';
import moment from 'moment';

function CommentBox() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [editMode, setEditMode] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [showComments, setShowComments] = useState(false);

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

  return (
    <>
      <div className="flex justify-end">
        <button
          className=" mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowComments(true)}
        >
          <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z"></path></svg>
        </button>
      {showComments ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-12 mx-auto max-w-4xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
               <button
                  type="button"
                  className="absolute right-1 top-1 text-gray-400 bg-transparent hover:bg-red-200 hover:text-gray-900 rounded-lg text-sm p-2 ml-auto inline-flex items-center dark:hover:bg--800 dark:hover:text-white"
                  onClick={() => setShowComments(false)}
                >
                  <svg
                    aria-hidden="true"
                    className="w-6 h-6"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only"></span>
                </button>
                <div className="flex items-start justify-between p-6 border-b border-solid border-slate-200 rounded-t"> 
                {comments.map((comment, index) => (
                    <div key={index} className="mb-4 border-b border-gray-300"> 
                      <p className="text-sm text-gray-500 mt-2">{moment().format('MMMM Do YYYY, h:mm:ss a')}</p> 
                      <div className="flex justify-end mt-2">
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
        </>

      ) : null}

        <button
          className="bg-blue-500 text-white rounded-lg px-2 py-2 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
          type="button"
          onClick={() => setShowModal(true)}
        >
          Open regular modal
        </button>
      </div>
      {showModal ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <button
                  type="button"
                  className="absolute right-1 text-gray-400 bg-transparent hover:bg-red-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg--800 dark:hover:text-white"
                  onClick={() => setShowModal(false)}
                >
                  <svg
                    aria-hidden="true"
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="sr-only"></span>
                </button>
                <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                  <form onSubmit={handleFormSubmit} className="w-96">
                    <textarea
                      id="message"
                      className="block p-2.5 w-full h-40 text-sm text-black bg-white rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 mb-4 resize-none"
                      placeholder="Write your thoughts here..."
                      value={newComment}
                      onChange={handleInputChange}
                    ></textarea>
                    <div className="flex justify-end">
                      <button
                        type="submit"
                        className="bg-blue-500 text-white rounded-lg px-4 py-2"
                      >
                        {editMode ? "Save Comment" : "Add Comment"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default CommentBox;