import React, { useState, useContext } from 'react';
import './style/Qna.css'; // CSS 파일을 import 합니다.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { QnaContext } from '../detail/QnaContext';

import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // BrowserRouter 추가

function Qna() {
  const { qnas, setQnas } = useContext(QnaContext); // NoticeContext에서 공지사항 데이터를 가져옵니다.
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태를 추가
  const [filteredQnas, setFilteredQnas] = useState([]);
  const itemsPerPage = 10; // 페이지당 표시할 아이템 수

  // 페이지 번호를 계산합니다.
  const totalPages = Math.ceil((searchTerm === '' ? qnas : filteredQnas).length / itemsPerPage) || 1;

  // 페이지 변경 함수를 정의합니다.
  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  // 공지사항 데이터를 현재 페이지에 맞게 필터링합니다.
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const paginatedQnas = (searchTerm === '' ? qnas : filteredQnas).slice(startIndex, endIndex);
  const incrementViewCount = (id) => {
    setQnas(qnas.map((qna) =>
      qna.id === id ? { ...qna, views: qna.views + 1 } : qna
    ));
  };

  const handleSearchInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    // 검색어를 이용하여 공지사항을 필터링합니다.
    const filteredQnas = qnas.filter((qna) => {
      // 검색어를 대소문자 구분 없이 비교합니다.
      const title = qna.title.toLowerCase();
      const author = qna.author.toLowerCase();
      const content = qna.content.toLowerCase();
      const searchTermLower = searchTerm.toLowerCase();

      // 제목, 글쓴이, 내용 중에서 검색어를 포함하는 공지사항을 찾습니다.
      return (
        title.includes(searchTermLower) ||
        author.includes(searchTermLower) ||
        content.includes(searchTermLower)
      );
    });

    // 필터링된 공지사항을 설정합니다.
    setFilteredQnas(filteredQnas);
    // 검색이 발생하면 페이지를 1로 초기화합니다.
    setCurrentPage(1);
  };
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
            <strong>공지사항</strong>
            <p>한성대학교 컴퓨터 공학부에서 중요한 정보들을 공지해드립니다.</p>
          </div>
          <section className="search-form-container">
            <div className="board-search">
              <div className="form-search">
                <fieldset>
                  <legend className="hidden">게시물 검색</legend>
                  <div className="tbl-search">
                    <div className="search-input">
                      <select id="srchColumn" name="srchColumn" title="게시판검색">
                        <option label="제목" value="title">제목</option>
                        <option label="작성자" value="author">작성자</option>
                        <option label="내용" value="content">내용</option>
                      </select>
                      <input
                        type="text"
                        id="srchWrd"
                        name="srchWrd"
                        value={searchTerm}
                        title="검색내용"
                        onChange={handleSearchInputChange}
                        placeholder="검색어를 입력하세요" // 검색어 입력 플레이스홀더 추가
                      />
                      <button type="button" onClick={handleSearch}>
                        검색
                      </button>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
          </section>
          <div className="board_list_wrap">
            <div className="board_list">
              <div className="top">
                <div className="num">번호</div>
                <div className="title">제목</div>
                <div className="writer">글쓴이</div>
                <div className="date">작성일</div>
                <div className="count">조회</div>
              </div>

              {searchTerm === '' ? ( // 검색어가 없는 경우 전체 공지사항을 출력
                paginatedQnas.map((qna) => (
                  <div key={qna.id}>
                    <div className="num">{qna.id}</div>
                    <div className="title">
                      <Link
                        to={`/QnaContent/${qna.id}`}
                        onClick={() => incrementViewCount(qna.id)}
                      >
                        {qna.title}
                      </Link>
                    </div>
                    <div className="writer">{qna.author}</div>
                    <div className="date">{qna.date}</div>
                    <div className="count">{qna.views}</div>
                  </div>
                ))
              ) : (
                filteredQnas.length > 0 ? ( // 검색어가 있고 검색 결과가 있는 경우 검색 결과를 출력
                  filteredQnas.map((qna) => (
                    <div key={qna.id}>
                      <div className="num">{qna.id}</div>
                      <div className="title">
                        <Link
                          to={`/QNaContent/${qna.id}`}
                          onClick={() => incrementViewCount(qna.id)}
                        >
                          {qna.title}
                        </Link>
                      </div>
                      <div className="writer">{qna.author}</div>
                      <div className="date">{qna.date}</div>
                      <div className="count">{qna.views}</div>
                    </div>
                  ))
                ) : ( // 검색어가 있지만 검색 결과가 없는 경우 메시지 출력
                  <p>검색 결과가 없습니다.</p>
                )
              )}
            </div>

            <div className="board_page">
              <Link to="#" className="bt first" onClick={() => handlePageChange(1)}> &lt;&lt; </Link>
              <Link to="#" className="bt prev" onClick={() => handlePageChange(currentPage - 1)}> &lt; </Link>
              {searchTerm === '' ? (
                Array.from({ length: totalPages }, (_, index) => (
                  <Link
                    key={index + 1}
                    to="#"
                    className={`num ${currentPage === index + 1 ? 'on' : ''}`}
                    onClick={() => handlePageChange(index + 1)}
                  >
                    {index + 1}
                  </Link>
                ))
              ) : (
                <Link to="#" className="num on">
                  {1}
                </Link>
              )}
              <Link to="#" className="bt next" onClick={() => handlePageChange(currentPage + 1)}> &gt; </Link>
              <Link to="#" className="bt last" onClick={() => handlePageChange(totalPages)}> &gt;&gt; </Link>
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
