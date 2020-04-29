import React, { useState, useEffect } from "react";
import "../styles/detailsComments.css";
import Comments from "./CommentSection/Comments";
import StarRating from "./CommentSection/StarRating";
<<<<<<< HEAD
import { Comment, Header } from 'semantic-ui-react';
=======
>>>>>>> Alex-BrowsingAndSorting
import axios from "axios";

function DetailsComments(props) {
  const bookId = props.match.params.id;
  const [Book, setBook] = useState([]);

  const [Info, setInfo] = useState({
    title: "Title",
    author: "Author",
    image: "Image",
    publisher: "Publisher",
    description: "Description",
    genre: "Genre",
  });

  const [CommentLists, setCommentLists] = useState([]);

  const bookVariable = {
    bookId: bookId,
  };

  console.log(bookId);

  useEffect(() => {
<<<<<<< HEAD
     axios.post(`http://localhost:5000/comment/getComments`, bookVariable).then((response) => {
=======
     axios.post("/api/comment/getComments", bookVariable).then((response) => {
>>>>>>> Alex-BrowsingAndSorting
       if (response.data.success) {
         setBook(response.data.Book);
         setCommentLists(response.data.comments);
       }
     });
    axios.get(`http://localhost:5000/books/${bookId}`).then((data) => {
      setInfo(data.data);
    });
  }, []);

  console.log(Info);

  const updateComment = (newComment) => {
<<<<<<< HEAD
    setCommentLists(CommentLists.concat(newComment))
  }
=======
    setCommentLists(CommentLists.push(newComment));
  };
>>>>>>> Alex-BrowsingAndSorting

  return (
    <div className='parent'>
      {/* Image */}
      <img className='left-image' src={Info.image} alt='bookcover' />
      {/* First Details Page*/}
      <div className='details'>
        <h1 className='title'>{Info.title}</h1>
        <a className='authorPage' href='../components/authorPage.js'>
          {Info.author}
        </a>
        <div className='container'>
          <h3 className='info'>{Info.publisher}</h3>
        </div>
        <div className='container'>
          <h3 className='info'>{Info.description}</h3>
        </div>
        <div className='container'>
          <h3 className='info'>{Info.genre}</h3>
        </div>
      </div>
       <div className='separator'></div> 
       <div className='details'>
        <h1>
          <StarRating></StarRating>
        </h1>
<<<<<<< HEAD
        <Header as='h3' dividing> 
        Comments
        </Header>

      <Comment.Group>
        <Comments
          CommentLists={CommentLists}
          postId={bookId}
          refreshFunction={updateComment}
        />
        </Comment.Group>
=======

        <Comments
          CommentLists={CommentLists}
          postId={Book._id}
          refreshFunction={updateComment}
        />
>>>>>>> Alex-BrowsingAndSorting
      </div>
    </div>
  );
}

<<<<<<< HEAD
export default DetailsComments
=======
export default DetailsComments;
>>>>>>> Alex-BrowsingAndSorting
