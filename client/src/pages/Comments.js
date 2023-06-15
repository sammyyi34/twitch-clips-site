import React, { useState, useEffect } from 'react';
import CommentForm from '../components/CommentForm';
import CommentList from '../components/CommentList';

const CommentPage = () => {
  // State to hold the comments
  const [comments, setComments] = useState([]);

  // Function to fetch comments from the server
  const fetchComments = async () => {
    try {
      // Make an API request to fetch comments
      // Replace '/api/comments' with your actual API endpoint
      const response = await fetch('/api/comments');
      const data = await response.json();

      // Update the comments state with the fetched data
      setComments(data);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  // Function to handle comment submission
  const handleCommentSubmit = async (commentData) => {
    try {
      // Make an API request to submit a new comment
      // Replace '/api/comments' with your actual API endpoint
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(commentData),
      });

      if (response.ok) {
        // Comment submitted successfully, fetch updated comments
        fetchComments();
      } else {
        // Handle error case
        console.error('Error submitting comment');
      }
    } catch (error) {
      console.error('Error submitting comment:', error);
    }
  };

  useEffect(() => {
    // Fetch comments when the component mounts
    fetchComments();
  }, []);

  return (
    <div>
      <h1>Comment Page</h1>
      <CommentForm onCommentSubmit={handleCommentSubmit} />
      <CommentList comments={comments} />
    </div>
  );
};

export default CommentPage;