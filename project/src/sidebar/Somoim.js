import React from 'react';
import './style/somoim.css'; // 커스텀 스타일 시트를 import 합니다.
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS를 import 합니다.
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Routes 추가

function Somoim() {
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
        <div className="sidebar">
          <ul>
            <li><a href="hewgong.html">학생회 공지사항</a></li>
            <li><Link className="nav-link" to="/Community">동아리</Link></li>
            <li><Link className="nav-link" to="/Somoim">소모임</Link></li>
            {/* More categories */}
          </ul>
        </div>
        
        <div className="main-content">
          <div className="component-container">
            <div className="dongimg">
              <img src="original.jpg" alt="로고" className="logo-image" />
            </div>
            <div className="description">
              <p>소모임</p>
              <p>안녕하세요 세상의 bug는 저희가 다 잡아버리겠습니다.</p>
            </div>
          </div>
          <div className="component-container">
            <div className="dongimg">
              <img src="original.jpg" alt="로고" className="logo-image" />
            </div>
            <div className="description">
              <p>SWAG</p>
              <p>안녕하세요 칸예 웨스트입니다.</p>
            </div>
          </div>
          <div className="component-container">
            <div className="dongimg">
              <img src="original.jpg" alt="로고" className="logo-image" />
            </div>
            <div className="description">
              <p>검찰</p>
              <p>LG 승부조작 우승 사건 제대로 수사해서 국민 앞에서 제대로 심판하겠습니다.</p>
            </div>
          </div>
          <div className="component-container">
            <div className="dongimg">
              <img src="original.jpg" alt="로고" className="logo-image" />
            </div>
            <div className="description">
              <p>박승현</p>
              <p>안녕하세요 여러분 break-point 찍어보면서 제대로 리액트 공부해 봅시다!</p>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="footer-container">
          {/* <div className="footer-logo">
            <img src="hansung.png" alt="Logo">
          </div> */}
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

export default Somoim;
