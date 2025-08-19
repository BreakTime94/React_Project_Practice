import React from "react";

function PostForm(props) {


  const submit = (e) => {
    e.preventDefault();
    const obj = {title: document.querySelector('input[name=title]').value, content: document.querySelector('textarea[name=content]').value};
    props.formSubmit(obj);
  }


  return(
    <form onSubmit={submit}>
      <input type={"text"} name={"title"}/>
      <br/>
      <textarea type={"text"} name={"content"}/>
      <br/>
      <button type={"submit"}>제출</button>
    </form>
  );
}
export default PostForm