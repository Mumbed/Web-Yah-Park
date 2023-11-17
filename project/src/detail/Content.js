import React from 'react';
import './style/Content.css';

import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // BrowserRouter 추가
import { Routes } from 'react-router-dom'; // Routes 추가

function Content() {
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container">
          <Link className="nav-link" to="/Main">한성대학교 컴퓨터공학부</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                <Link className="nav-link" to="/Notice">공지사항</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="list/학부소개.html">학부소개</a>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/Community">커뮤니티</Link>
                  
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/Professor">교수진</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/Qna">Qna</Link>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="/login.html">LOGIN</a>
                </li>
              
              </ul>
            </div>
          </div>
        </nav>
      </header>

      <div className="board_wrap">
        <div className="board_title">
          <strong>Q&A 게시판</strong>
        </div>
        <div className="board_view_wrap">
          <div className="board_view">
            <div className="title">글 제목이 들어갑니다.</div>
            <div className="info">
              <dl>
                <dt>번호</dt>
                <dd>1</dd>
              </dl>
              <dl>
                <dt>글쓴이</dt>
                <dd>김이름</dd>
              </dl>
              <dl>
                <dt>작성일</dt>
                <dd>2021.1.16</dd>
              </dl>
              <dl>
                <dt>조회</dt>
                <dd>33</dd>
              </dl>
            </div>
            <div className="cont">
              글 내용이 들어갑니다<br />
              글 내용이 들어갑니다<br />
              글 내용이 들어갑니다<br />
              글 내용이 들어갑니다<br />
              글 내용이 들어갑니다<br />
              글 내용이 들어갑니다<br />
              글 내용이 들어갑니다<br />
              글 내용이 들어갑니다
            </div>
          </div>
          <div className="bt_wrap">
            <a href="q  vqWQ&a.html" className="on">
              목록
            </a>
            <Link className="nav-link" to="/Edit">수정</Link>

          </div>
        </div>
      </div>
      <footer>
        <div className="footer-container">
          <div className="footer-links">
            <a href="#">| 게시판보기 | </a>
            <a href="#">교수소개 사이트 | </a>
            <a href="#">한성대학교 커리큘럼 |</a>
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

export default Content;
