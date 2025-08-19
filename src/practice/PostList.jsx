import React from "react";

function PostList(props) {
    const list = props.post
    const tag = list.map(i => {
      return (<li><span>{i.title}</span>
        <br/>{i.content}</li>)
    }

    );

  return(
    <ul>
      {tag}
    </ul>
  );
}

export default PostList;