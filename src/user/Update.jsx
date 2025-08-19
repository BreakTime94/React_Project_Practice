import React, {useState} from "react";

function Update(props) {
  const [title, setTitle] = useState(props.title);
  const [content, setContent] = useState(props.content);
  return(
      <div>
        <h2>Update</h2>
        <h4>글 번호: {props.id}</h4>
        <form onSubmit={(event) => {
          event.preventDefault();
          const _title = event.target.title.value; //event를 받는 태그 내부의 name 값으로 직접 접근 가능
          const _content = event.target.content.value;
          console.log(_title, _content);
          props.onUpdate(_title, _content);
        }}>
          <p><input name={"title"} placeholder={"제목을 수정하세요."} value={title} onChange={(event) => {
            setTitle(event.target.value)
          }}/></p>
          <p><textarea name={"content"} placeholder={"내용을 수정하세요"} value={content} onChange={(event) => {
            setContent(event.target.value);
          }}/></p>
          <p><button type={"submit"}>Update</button></p>
        </form>
      </div>
  );
}

export default Update