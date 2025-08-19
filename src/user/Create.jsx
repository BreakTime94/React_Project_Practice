import React from "react";

function Create(props) {

  return(
      <div>
        <h2>Create</h2>
        <form onSubmit={(event) => {
          event.preventDefault();
          const title = event.target.title.value; //event를 받는 태그 내부의 name 값으로 직접 접근 가능
          const content = event.target.content.value;
          console.log(title, content);
          props.onCreate(title, content);
        }}>
          <p><input name={"title"} placeholder={"제목을 입력하세요."}/></p>
          <p><textarea name={"content"} placeholder={"내용을 입력하세요"} /></p>
          <p><button type={"submit"}>Create</button></p>
        </form>
      </div>
  );
}
export default Create