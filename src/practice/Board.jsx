import React, {useState} from "react";
import PostList from "./PostList";
import PostForm from "./PostForm";

function Board(props) {
  const [post, setPost] = useState([]);

  function formSubmit(value) {
    setPost([...post, value]);
  }


  return(
      <div>
        <PostList post={post}/>
        <PostForm formSubmit={formSubmit}/>
      </div>
  );
}

export default Board