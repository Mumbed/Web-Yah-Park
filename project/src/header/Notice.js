import React from 'react';
import './style/Notice.css'; // CSS 파일을 import 합니다.
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // BrowserRouter 추가
import noticedata from '../notice.json';

function Notice() {
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
        <div className="board_wrap">
          <div className="board_title">
            <strong>공지사항</strong>
            <p>한성대학교 컴퓨터 공학부에서 중요한 정보들을 공지해드립니다.</p>
          </div>
          <div className="board_list_wrap">
            <div className="board_list">
              <div className="top">
                <div className="num">번호</div>
                <div className="title">제목</div>
                <div className="writer">글쓴이</div>
                <div className="date">작성일</div>
                <div className="count">조회</div>
              </div>

              {noticedata.map((notice) => (
                <div key={notice.id}>
                  <div className="num">{notice.id}</div>
                  <div className="title">
                  <Link className="title" to={`/View?id=${notice.id}`}>{notice.title}</Link>
                   </div>
                  <div className="writer">{notice.author}</div>
                  <div className="date">{notice.date}</div>
                  <div className="count">{notice.views}</div>
                </div>
              ))}
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
            <Link className="nav-link" to="/Write">등록</Link>
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
