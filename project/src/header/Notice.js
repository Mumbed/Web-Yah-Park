import React, { useState, useEffect } from 'react';
import faker from 'faker';
import Content from '../detail/Content'; // Content 컴포넌트를 import

import './style/Notice.css'; // CSS 파일을 import 합니다.

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // BrowserRouter 추가

function Notice() {
  const newData = [];
  const [notices, setNotices] = useState(() => {
    const initialNotices = [];
    for (let i = 1; i <= 100; i++) {
      initialNotices.push({
        id: i,
        title: `공지사항 제목 ${i}`,
        author: faker.name.lastName(),
        date: faker.date.past(1).toISOString().split('T')[0],
        views: faker.random.number({ min: 1, max: 1000 }),
        content: faker.lorem.paragraphs(),
      });
    }
    return initialNotices;
  });
  for (let i = 1; i <= 100; i++) {
    const newNotice = {
      id: i,
      title: `공지사항 제목 ${i}`,
      author: faker.name.lastName(),
      date: faker.date.past(1).toISOString().split('T')[0],
      views: faker.random.number({ min: 1, max: 1000 }),
      content: faker.lorem.paragraphs(), // 공지사항 내용을 랜덤으로 생성
    };
    newData.push(newNotice);
  }

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10; // 페이지당 표시할 아이템 수

  // 페이지 번호를 계산합니다.
  const totalPages = Math.ceil(newData.length / itemsPerPage);

  // 페이지 변경 함수를 정의합니다.
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // 공지사항 데이터를 현재 페이지에 맞게 필터링합니다.
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedNotices = newData.slice(startIndex, endIndex);

  // 'notices' 변수에 데이터를 할당합니다.

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
                    <li><Link className="dropdown-item" to="/Student_Notice">학생회공지</Link></li>
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
                    <li><Link className="dropdown-item" to="/Education">교육과정</Link></li>
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

              {paginatedNotices.map((notice) => (
          <div key={notice.id}>
            <div className="num">{notice.id}</div>
            <div className="title">
              <Link to={`/Content/${notice.id}`}>{notice.title}</Link>
            </div>
            <div className="writer">{notice.author}</div>
            <div className="date">{notice.date}</div>
            <div className="count">{notice.views}</div>
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
