import React from 'react'
import { Comment } from 'semantic-ui-react'

function SingleComment(props) {
    return (
        <div>
            <Comment>
                <Comment.Avatar 
<<<<<<< HEAD
                src='https://www.asiatripdeals.com/wp-content/uploads/2019/03/Anonymous-Avatar.png'
                alt = "image"
                height="42"
                width="42" />
                <Comment.Content>
                  <Comment.Author>  ebookreader123 </Comment.Author>
=======
                src= {props.comment.writer.image}
                alt= "image" />
                <Comment.Content>
                  <Comment.Author>  {props.comment.writer.name}  </Comment.Author>
>>>>>>> Alex-BrowsingAndSorting
                  <Comment.Text>  {props.comment.content}  </Comment.Text>
                 </Comment.Content>
              </Comment>
        </div>
    )
}

<<<<<<< HEAD
export default SingleComment
=======
export default SingleComment
>>>>>>> Alex-BrowsingAndSorting
