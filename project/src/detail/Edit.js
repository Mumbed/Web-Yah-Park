import React, { useState } from 'react';
import './style/Edit.css';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { Routes } from 'react-router-dom'; 

function Edit() {
  const [title, setTitle] = useState('글 제목이 들어갑니다');
  const [author, setAuthor] = useState('김이름');
  const [password, setPassword] = useState('1234');
  const [content, setContent] = useState('글 내용이 들어갑니다.');

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light fixed-top">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">한성대학교 컴퓨터공학부</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse col-md-auto" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/Notice">공지사항</Link>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/Community" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    커뮤니티
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/Community">동아리</Link></li>
                    <li><Link className="dropdown-item" to="/Somoim">소모임</Link></li>
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle" to="/IntroMain" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    학부소개
                  </Link>
                  <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <li><Link className="dropdown-item" to="/IntroWeb">웹공학트랙</Link></li>
                    <li><Link className="dropdown-item" to="/IntroBig">빅데이터트랙</Link></li>
                    <li><Link className="dropdown-item" to="/IntroMobile">모바일소프트웨어트랙</Link></li>
                    <li><Link className="dropdown-item" to="/IntroGraphic">디지털컨텐츠 가상현실트랙</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="/IntroMain">교육과정</Link></li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Professor">교수진</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Qna">QnA</Link>
                </li>
              </ul>
              <button className="btn btn-outline-success" action=""><Link to="/Login">
                로그인
              </Link></button>
            </div>
          </div>
        </nav>
      </header>

      <div className="board_wrap">
        <div className="board_title">
          <strong>Q&A 게시판</strong>
        </div>
        <div className="board_write_wrap">
          <div className="board_write">
            <div className="title">
              <dl>
                <dt>제목</dt>
                <dd><input type="text" placeholder="제목 입력" value={title} onChange={(e) => setTitle(e.target.value)} /></dd>
              </dl>
            </div>
            <div className="info">
              <dl>
                <dt>글쓴이</dt>
                <dd><input type="text" placeholder="글쓴이 입력" value={author} onChange={(e) => setAuthor(e.target.value)} /></dd>
              </dl>
              <dl>
                <dt>비밀번호</dt>
                <dd><input type="password" placeholder="비밀번호 입력" value={password} onChange={(e) => setPassword(e.target.value)} /></dd>
              </dl>
            </div>
            <div className="cont">
              <textarea placeholder="내용 입력" value={content} onChange={(e) => setContent(e.target.value)} />
            </div>
          </div>
          <div className="bt_wrap">
            <a href="view.html" className="on">수정</a>
            <a href="view.html">취소</a>
          </div>
        </div>
      </div>
      <footer>
        <div className="footer-container">

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

export default Edit;
