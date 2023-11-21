import React from 'react';
import './style/Student_Notice.css'; // CSS 파일을 import 합니다.

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // BrowserRouter 추가

function Student_Notice() {
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
                    <li><Link className="dropdown-item" to="">갤러리</Link></li>
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

      <div className="board">
        <div className="sidebar">
          <ul>
            <li><Link className="nav-link" to="/Student_notice">학생회 공지사항</Link></li>
            <li><Link className="nav-link" to="/Community">동아리</Link></li>
            <li><Link className="nav-link" to="/Somoim">소모임</Link></li>
            {/* More categories */}
          </ul>
        </div>
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

export default Student_Notice;
