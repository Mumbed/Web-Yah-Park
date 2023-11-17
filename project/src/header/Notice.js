import React from 'react';
import './style/Notice.css'; // CSS 파일을 import 합니다.
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // BrowserRouter 추가

function Notice() {
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
                  <a className="nav-link" href="list/교수진.html">교수진</a>
                </li>
                <li className="nav-item">
                <Link className="nav-link" to="/Qna">Qna</Link>
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
      <div className="board">
        <div class="board_wrap">
        <div class="board_title">
            <strong>공지사항</strong>
            <p>한성대학교 컴퓨터 공학부에서 중요한 정보들을 공지해드립니다.</p>
        </div>
        <div class="board_list_wrap">
            <div class="board_list">
                <div class="top">
                    <div class="num">번호</div>
                    <div class="title">제목</div>
                    <div class="writer">글쓴이</div>
                    <div class="date">작성일</div>
                    <div class="count">조회</div>
                </div>
                <div>
                    <div class="num">5</div>
                    <div class="title"><a href="view.html">글 제목이 들어갑니다.</a></div>
                    <div class="writer">김이름</div>
                    <div class="date">2021.1.15</div>
                    <div class="count">33</div>
                </div>
                <div>
                    <div class="num">4</div>
                    <div class="title"><a href="view.html">글 제목이 들어갑니다.</a></div>
                    <div class="writer">김이름</div>
                    <div class="date">2021.1.15</div>
                    <div class="count">33</div>
                </div>
                <div>
                    <div class="num">3</div>
                    <div class="title"><a href="view.html">글 제목이 들어갑니다.</a></div>
                    <div class="writer">김이름</div>
                    <div class="date">2021.1.15</div>
                    <div class="count">33</div>
                </div>
                <div>
                    <div class="num">2</div>
                    <div class="title"><a href="view.html">글 제목이 들어갑니다.</a></div>
                    <div class="writer">김이름</div>
                    <div class="date">2021.1.15</div>
                    <div class="count">33</div>
                </div>
                <div>
                    <div class="num">1</div>
                    <div class="title"><a href="view.html">글 제목이 들어갑니다.</a></div>
                    <div class="writer">김이름</div>
                    <div class="date">2021.1.15</div>
                    <div class="count">33</div>
                </div>
            </div>
            <div class="board_page">
                <a href="#" class="bt first"> ## </a>
                <a href="#" class="bt prev"> # </a>
                <a href="#" class="num on">1</a>
                <a href="#" class="num">2</a>
                <a href="#" class="num">3</a>
                <a href="#" class="num">4</a>
                <a href="#" class="num">5</a>
                <a href="#" class="bt next">#</a>
                <a href="#" class="bt last">##</a>
            </div>
            <div class="bt_wrap">
                <a href="write.html" class="on">등록</a>
            </div>
        </div>
    </div>
    </div>
      <footer>
        <div className="footer-container">
          <div className="footer-links">
            <a href="#">| 게시판보기 |</a>
            <a href="#">교수소개 사이트 |</a>
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

export default Notice;
