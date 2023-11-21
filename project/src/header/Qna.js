import React, { useState, useContext } from 'react';
import './style/Qna.css'; // CSS 파일을 import 합니다.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { QnaContext } from '../detail/QnaContext';

import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // BrowserRouter 추가

function Qna() {
  const { qnas } = useContext(QnaContext); // NoticeContext에서 공지사항 데이터를 가져옵니다.

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // 페이지당 표시할 아이템 수

  // 페이지 번호를 계산합니다.
  const totalPages = Math.ceil(qnas.length / itemsPerPage);

  // 페이지 변경 함수를 정의합니다.
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // 공지사항 데이터를 현재 페이지에 맞게 필터링합니다.
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedNotices = qnas.slice(startIndex, endIndex);

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
        <div className="board_wrap">
          <div className="board_title">
            <strong>QNA</strong>
            <p>한성대학교 컴퓨터 공학부에서 궁금한 사항을 대답해드립니다.</p>
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

              {paginatedNotices.map((qna) => (
          <div key={qna.id}>
            <div className="num">{qna.id}</div>
            <div className="title">
              <Link to={`/QnaContent/${qna.id}`}>{qna.title}</Link>
            </div>
            <div className="writer">{qna.author}</div>
            <div className="date">{qna.date}</div>
            <div className="count">{qna.views}</div>
          </div>
        ))}
            </div>
            <div className="board_page">
              <a href="#" className="bt first"> ## </a>
              <a href="#" className="bt prev"> # </a>
              {Array.from({ length: totalPages }, (_, index) => (
                <a
                  key={index + 1}
                  href="#"
                  className={`num ${currentPage === index + 1 ? 'on' : ''}`}
                  onClick={() => handlePageChange(index + 1)}
                >
                  {index + 1}
                </a>
              ))}
              <a href="#" className="bt next">#</a>
              <a href="#" className="bt last">##</a>
            </div>
            <div class="bt_wrap">
              <Link className="nav-link" to="/QnaWrite">등록</Link>
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
