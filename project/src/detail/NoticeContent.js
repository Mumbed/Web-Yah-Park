// Content.js
import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { NoticeContext } from './NoticeContext';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // BrowserRouter 추가

function NoticeContent() {
  const { id } = useParams();
  const { notices } = useContext(NoticeContext);
  const notice = notices.find(notice => notice.id.toString() === id);

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
    <div className="board_wrap">
        <div className="board_title">
          <strong>공지사항</strong>
        </div>

        {notice ? (
          <div className="board_view_wrap">
            <div className="board_view">
              <div className="title">{notice.title}</div>
              <div className="info">
                <dl>
                  <dt>번호</dt>
                  <dd>{notice.id}</dd>
                </dl>
                <dl>
                  <dt>글쓴이</dt>
                  <dd>{notice.author}</dd>
                </dl>
                <dl>
                  <dt>작성일</dt>
                  <dd>{notice.date}</dd>
                </dl>
                <dl>
                  <dt>조회</dt>
                  <dd>{notice.views}</dd>
                </dl>
              </div>
              <div className="cont">{notice.content}</div>
            </div>
            <div className="bt_wrap">
              <Link to="/Notice" className="on">목록</Link>
              <Link to={`/Edit/${notice.id}`} className="nav-link">수정</Link>
            </div>
          </div>
        ) : (
          <p>공지사항을 찾을 수 없습니다.</p>
        )}
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

export default NoticeContent;
