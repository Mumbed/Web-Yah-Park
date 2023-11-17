import React, { useState } from 'react';
import './style/Edit.css';

function Edit() {
  const [title, setTitle] = useState('글 제목이 들어갑니다');
  const [author, setAuthor] = useState('김이름');
  const [password, setPassword] = useState('1234');
  const [content, setContent] = useState('글 내용이 들어갑니다.');

  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
            <a className="navbar-brand" href="../main.html">한성대학교 컴퓨터공학부</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <a className="nav-link" href="list/q&a.html">공지사항</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/list/학부소개.html">학부소개</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="list/test.html">커뮤니티</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="list/교수진.html">교수진</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="list/q&a.html">Q&A</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login.html">LOGIN</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link signup-button" href="/signup.html">
                    SIGN UP
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="board_wrap">
        <div className="board_title">
          <strong>Q&A 게시판</strong>
          <p> 여러 질문하세요 컴공 학생여러분 이시발련들아.</p>
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

export default Edit;
