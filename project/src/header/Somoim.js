import React from 'react';
import './style/somoim.css'; // 커스텀 스타일 시트를 import 합니다.
import 'bootstrap/dist/css/bootstrap.min.css'; // Bootstrap CSS를 import 합니다.
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Routes 추가

function Somoim() {
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
      
      <div className="board">
        <div className="sidebar">
          <ul>
            <li><a href="hewgong.html">학생회 공지사항</a></li>
            <li><a href="test.html">동아리</a></li>
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
