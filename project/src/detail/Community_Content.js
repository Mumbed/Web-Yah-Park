import React from 'react';
import './style/Community_Content.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // BrowserRouter 추가


function Community_Content(){
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

      <section className="community-intro">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <img
          src="original.jpg"
          alt="동아리 활동 사진"
          className="Community_Content_Image"
        />
      </div>
      <div className="col-lg-6">
        <h2 className='Community_Content_Name'>BUG</h2>
        <p>
        저희 BUG에서 앞으로 활동을 같이 꾸려나갈 신입생분들을 모집합니다!
        저희 BUG에서는 튜터링, 그룹 스터디, 프로젝트 등의 활동을 하고 있습니다.
        대부분의 활동은 대면으로 진행할 예정이며 MT, 개강파티, 신년회 등 다양한 친목 활동도 기획중입니다.
        컴퓨터공학부 학우들뿐만 아니라 IT공과대학, 상상력 인재학부를 지원한 사람이라면 누구나 지원 가능하니 많은 관심 부탁드립니다!
        

        </p>
        <p>
          동아리에서는 [세부 활동 내용], [모집 기간 및 방법] 등에 대한 정보를 제공하고 있습니다.
        </p>
        <p>
          자세한 내용은 동아리 홈페이지나 직접 문의해주세요.
        </p>
      </div>
    </div>
  </div>
</section>


     


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

export default Community_Content;