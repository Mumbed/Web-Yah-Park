import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // useNavigate를 import

import './style/Write.css'; // Import your CSS file here
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // BrowserRouter 추가
import noticedata from '../notice.json';

function Write() {
    const navigate = useNavigate(); // useNavigate를 사용

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [password, setPassword] = useState('');
    const [content, setContent] = useState('');
  
    const handleTitleChange = (e) => {
      setTitle(e.target.value);
    };
  
    const handleAuthorChange = (e) => {
      setAuthor(e.target.value);
    };
  
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    };
  
    const handleContentChange = (e) => {
      setContent(e.target.value);
    };
  
    const handleRegisterClick = () => {
        const nextId = noticedata.length + 1;

      // Create a new notice object
      const newNotice = {
        id: nextId,
        title: title,
        author: author,
        password: password,
        content: content,
        date: new Date().toLocaleDateString(), // Use toLocaleDateString to get date in 'YYYY-MM-DD' format
        views: 0, // Initial views count
      };
  
      // Add the new notice to the existing noticedata array
      noticedata.push(newNotice);
  
      // Update the notice.json file (You may need to use a server or file system API)
      // Example:
      // fetch('/api/update-notices', {
      //   method: 'POST',
      //   body: JSON.stringify(noticedata),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });
  
      // Clear the input fields
      setTitle('');
      setAuthor('');
      setPassword('');
      setContent('');
      navigate('/Notice'); // useNavigate를 사용하여 페이지 이동

  
      // Optionally, redirect to the notice list page
      // history.push('/notices');
    };


  return (
    <div>
      <header>
      <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" data-navbar-on-scroll="data-navbar-on-scroll">
      <div className="container">
      <Link to="/Main" className="navbar-brand d-flex align-items-center fw-semi-bold fs-3">
          <img className="me-3" src="./logo.png" alt="" />
        </Link>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
          <ul className="navbar-nav mx-auto pt-2 pt-lg-0 font-base">
            <li className="nav-item px-2" data-anchor="data-anchor">
            <Link className="nav-link" to="/Notice">공지사항</Link></li>
            <li className="nav-item px-2" data-anchor="data-anchor">
            <Link className="nav-link" to="/IntroMain">학부소개</Link></li>
            <li className="nav-item px-2" data-anchor="data-anchor">
            <Link className="nav-link" to="/Community">커뮤니티</Link></li>
            <li className="nav-item px-2" data-anchor="data-anchor">
            <Link className="nav-link" to="/Professor">교수진</Link></li>
            <li className="nav-item px-2" data-anchor="data-anchor">
                <Link className="nav-link" to="/Qna">Qna</Link>
                </li>
          </ul>
          <form className="ps-lg-5">
        <Link to="/Login" className="btn btn-outline-primary order-0">
          로그인
        </Link>
      </form>
        </div>
      </div>
    </nav>
      </header>

      <div className="board_wrap">
        <div className="board_title">
          <strong>Q&A 게시판</strong>
          <p>여러 질문하세요 컴공 학생여러분 이시발련들아</p>
        </div>
        <div className="board_write_wrap">
          <div className="board_write">
            <div className="title">
              <dl>
                <dt>제목</dt>
                <dd><input type="text" placeholder="제목 입력" value={title} onChange={handleTitleChange} /></dd>
              </dl>
            </div>
            <div className="info">
              <dl>
                <dt>글쓴이</dt>
                <dd><input type="text" placeholder="글쓴이 입력" value={author} onChange={handleAuthorChange} /></dd>
              </dl>
              <dl>
                <dt>비밀번호</dt>
                <dd><input type="password" placeholder="비밀번호 입력" value={password} onChange={handlePasswordChange} /></dd>
              </dl>
            </div>
            <div className="cont">
              <textarea placeholder="내용 입력" value={content} onChange={handleContentChange}></textarea>
            </div>
          </div>
          <div className="bt_wrap">
            <button onClick={handleRegisterClick} className="on">등록</button>
            <Link to="/list.html">취소</Link>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-container">
          <div className="footer-links">
            <a href="#">|  게시판보기  | </a>
            <a href="#">교수소개 사이트    | </a>
            <a href="#">한성대학교 커리큘럼  |</a>
          </div>
          <div className="footer-info">
            <p>02876 서울특별시 성북구 삼선교로 16길(삼선동2가) 116 한성대학교</p>
            <p>대표 02-760-4114 입학 02-760-5800</p>
          </div>
          <div className="footer-copy">
            <p>COPYRIGHT(c) HANSUNGUNIVERSITY. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Write;