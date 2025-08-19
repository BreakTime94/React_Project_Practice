import logo from './logo.svg';
import './App.css';
import styled from "styled-components";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./miniblog(chapter16)/component/page/MainPage";
import PostWritePage from "./miniblog(chapter16)/component/page/PostWritePage";
import PostViewPage from "./miniblog(chapter16)/component/page/PostViewPage";

const MainTitleText = styled.p `
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;

function App(props) {
  return (
    <BrowserRouter>
      <MainTitleText>소플의 미니 블로그</MainTitleText>
      <Routes>
        <Route index element={<MainPage/>} i></Route>
        <Route path={"post-write"} element={<PostWritePage/>}></Route>
        <Route path={"post/:postId"} element={<PostViewPage/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
