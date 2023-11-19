import React from 'react';
import './style/Qna.css'; // CSS 파일을 import 합니다.
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // BrowserRouter 추가

function Qna() {
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

      <div className="board">
       
        <div class="board_wrap">
        <div class="board_title">
            <strong>Q&A 게시판</strong>
            <p>컴퓨터 공학부, 코드 등 다양한 분야에 대해 질문해주세요!</p>
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
                    <div class="title"><Link className="nav-link" to="/Content">글 제목이 들어갑니다.</Link></div>
                    <div class="writer">김이름</div>
                    <div class="date">2021.1.15</div>
                    <div class="count">33</div>
                </div>
                <div>
                    <div class="num">4</div>
                    <div class="title"><Link className="nav-link" to="/Content">글 제목이 들어갑니다.</Link></div>
                    <div class="writer">김이름</div>
                    <div class="date">2021.1.15</div>
                    <div class="count">33</div>
                </div>
                <div>
                    <div class="num">3</div>
                    <div class="title"><Link className="nav-link" to="/Content">글 제목이 들어갑니다.</Link></div>
                    <div class="writer">김이름</div>
                    <div class="date">2021.1.15</div>
                    <div class="count">33</div>
                </div>
                <div>
                    <div class="num">2</div>
                    <div class="title"><Link className="nav-link" to="/Content">글 제목이 들어갑니다.</Link></div>
                    <div class="writer">김이름</div>
                    <div class="date">2021.1.15</div>
                    <div class="count">33</div>
                </div>
                <div>
                    <div class="num">1</div>
                    <div class="title"><Link className="nav-link" to="/Content">글 제목이 들어갑니다.</Link></div>
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

export default Qna;
