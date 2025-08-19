//Web.jsx
import React, {useState} from "react";
import Header from "./Header.jsx";
import Nav from "./Nav.jsx";
import Article from "./Article.jsx";
import Create from "./Create";
import Update from "./Update";

//함수형 컴포넌트, 첫 글자는 무조건 대문자로, 그래야 React Component로 인식


function Web (props) {
  const [mode, setMode] = useState('Welcome');
  let content = null; //Article 컴포넌트 내용 저장 변수
  // 글을 등록할 때 사용할 id 값도 별도 설정
  const[nextId, setNextId] = useState(3);
  //nav에 들어갈 글제목/글내용 객체 배열
  const [nav, setNav] = useState([
    {
      id: 1,
      title: "html",
      content: "html is ...",
    },
    {
      id: 2,
      title: "css",
      content: "css is ...",
    },
    {
      id: 3,
      title: "javascript",
      content: "javascript is ..."
    },
  ]);

  const [id, setId] = useState(0);
  if(mode === 'Welcome'){
    content = <Article title={"Welcome"} content={"Hello WEB!"}/>
  }
  else if(mode === 'Read') {
    //클릭한 내용 출력
    for(let i = 0 ; i < nav.length; i++){
      if(nav[i].id === id) {
        // content = <Article title={nav[i].title} content={nav[i].content}/>
        content = <Article {... nav[i]}/>
      }
    }
  }
  else if(mode === 'Create') {
    content = <Create onCreate={(title, content) => {
      const newNav = {
        id : nextId + 1,
        title : title,
        content : content
      }
      const newNavs = [...nav];

      newNavs.push(newNav);

      setNav(newNavs);

      setId(nextId + 1); // 글 번호만 관리하는 id 값
      setNextId(newNav.id);

      setMode('Read');

    }}/>
  } else if(mode === 'Update'){
    for(let i = 0 ; i < nav.length; i++){
      if(nav[i].id === id) {
        // content = <Article title={nav[i].title} content={nav[i].content}/>
        content = <Update {... nav[i]} onUpdate={(title, content) => {
          const upNav = {
            id : id,
            title: title,
            content: content,
          }
          const upNavs = [...nav];

          for(let i = 0; i < upNavs.length; i++) {
            if(upNavs[i].id === id) {
              upNavs[i] = upNav;
              break;
            }
          }
          setNav(upNavs);
          setMode('Read');
        }}/>
      }
    }
  }

  return (
      // 최상단 element는 반드시 한 개여야 함. ex) 반환 태그가 무조건 한 개여야 함. 그 내부에서 여러개의 태그로 이뤄진 것은 괜찮음
      <div>
        <Header title={"WEB"} onChangeMode={() => {
          setMode('Welcome');
        }}></Header>
        <Nav nav = {nav} onChangeMode={(id) => {
          setMode('Read');
          setId(id);
        }}/>
        {/*<Article article={article}/>*/}
        {content}
        <li><a href={"/"} onClick={(event) => {
          event.preventDefault();
          setMode("Create");
        }}>Create</a></li>
        { mode === 'Read' && <li><a href={"/"} onClick={(event) => {
          event.preventDefault();
          setMode('Update');

        }}>Update </a></li>}
        {mode === 'Read' && <li><a href={"/"} onClick={(event) => {
          event.preventDefault();
         if(window.confirm("삭제하시겠습니까?")) {
           const newNav = [];
           for(let i = 0 ; i < nav.length; i++){
             if(nav[i].id !== id) {
               newNav.push(nav[i]);
             }
           }
           setNav(newNav);
           setMode("Welcome")
         }
        }}>Delete </a></li>}
      </div>
  );
}

//다른 컴포넌트에서 사용할 수 있도록 하기 위한 선언
export default Web;