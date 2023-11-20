import React from 'react';
import './style/IntroMain.css'; // CSS 파일을 import 합니다.
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // BrowserRouter 추가
import { Routes } from 'react-router-dom'; // Routes 추가

function IntroMain() {
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

      <div className="sidebar">
        <ul>
          <Link className="nav-link" to="/IntroMobile">모바일 소프트웨어</Link>
          <Link className="nav-link" to="/IntroWeb">웹프로그래밍</Link>
          <Link className="nav-link" to="/IntroBig">빅데이터</Link>
          <Link className="nav-link" to="/IntroGraphic">디지털 콘텐츠 및 가상현실</Link>
          {/* More categories */}
        </ul>
      </div>

      <main className="container">
        <div className="bg-body-tertiary p-5 rounded">
          <h1>학부장 인사말</h1>
          <p className="lead">한성대학교 컴퓨터 공학부는 기존의 컴퓨터공학과와 멀티미디어 공학과를 합병하여 2016년 1학기부터 새로이 출범하였습니다. 창의적인 문제 해결 능력을 갖춘 글로벌 SW 인재 양성을 목표로 4개의 트랙별 교과 과정을 운영하고 있으며, 산업체와의 유기적인 연계를 통해 실무 교육을 진행하고 있습니다. 본교의 최대 학부로서 19명의 전임 교원이 학부 교육을 담당하고 있으며 학생들은 SW 경진 대회, 국내외 인턴쉽 참가, 학술 소모임 등 활발이 활동하고 있습니다. 앞으로도 교육, 산학, 연구를 축으로 IT 분야를 선도하는 학부가 되도록 노력하겠습니다. 감사합니다.</p>
          <a className="btn btn-lg btn-primary" href="../components/navbar/" role="button">View navbar docs &raquo;</a>
        </div>
      </main>
      <div className="b-example-divider"></div>

      <main className="container">
        <div className="bg-body-tertiary p-5 rounded">
          <h1>교육 목표</h1>
          <p className="lead">한성대학교 컴퓨터공학부는 소프트웨어 기술과 정보통신 기술(ICT)에 대한 심화 교육을 통해 창의적인 소프트웨어 엔지니어를 양성하고 있습니다. 구체적으로 문제 해결 능력과 시스템 구축 능력을 갖추고 최신 ICT 기술 트랜드를 활용할 수 있는 인재를 양성하고 있습니다. 이를 위해서 컴퓨터공학의 전반적인 이론과 프로그래밍 교육을 수행한 후, 산업체와의 협업을 통한 실무 프로젝트 기반 교육을 진행합니다. 소프트웨어와 컴퓨터 관련 기술은 사회 전반에 걸쳐 필수적인 기초 기술로 자리 잡고 있습니다. 따라서 한성대학교 컴퓨터 공학부 졸업생은 소프트웨어 및 컴퓨터 시스템을 다루는 모든 산업 분야에 취업해 활약하고 있습니다.</p>
          <a className="btn btn-lg btn-primary" href="../components/navbar/" role="button">View navbar docs &raquo;</a>
        </div>
      </main>
      <div className="b-example-divider"></div>

      <main className="container">
        <div className="bg-body-tertiary p-5 rounded">
          <h1>졸업생 사례</h1>
          <p className="lead">1.공개 SW 개발자 대회 미래창조과학부 장관상(2014년): 누구나 손쉽게 모바일용 소프트 키보드를 구현할 수 있게 해주는 S/W 개발, 졸업이후 각각 삼성전자와 NHN에 입사
            2. CEO 캠퍼스 대회 최우수상: 동대문 의류 유통 클러스터를 활용한 의류 판매를 지원하는 B2C 앱 개발
            3. ‘기능성 게임에 적합한 감정을 가진 다중 그룹 군중 시뮬레이션 연구’ 프로젝트에 연구원으로 참여. 기능성 게임 분야의 중요기술이며 인력 수요가 높은 군중 시뮬레이션 분야를 시스템으로 구현하는 역할을 수행. 국내 게임회사인 Nexon에 입사
            4. ICT 관련 기업 136 개와 MOU를 체결하고 기업에 학생이 4~6 개월 동안 파견되어 현장 실무 중심의 교육 및 실습 과정 진행. 2015년 파견된 38명의 학생 (당시 4학년) 중에 35%에 해당하는 13명은 실습을 진행했던 해당 기업에 졸업과 함께 곧바로 취업</p>
          <a className="btn btn-lg btn-primary" href="../components/navbar/" role="button">View navbar docs &raquo;</a>
        </div>
      </main>
      <div className="b-example-divider"></div>

      <main className="container">
        <div className="bg-body-tertiary p-5 rounded">
          <h1>CONTACT</h1>
          <p className="lead">
            <ul>
              <li>위치: 한성대학교 공학관 A동 104호</li>
              <li>대중 교통: 한성대입구역(4호선) 2번 출구 마을버스 2번 승차, 창신역(6호선) 3번 출구 마을버스 3번 승차</li>
              <li>주소: 02876 서울시 성북구 삼선교로 16길 116 한성대학교</li>
              <li>전화: 02-760-4137, 02-760-4438</li>
              <li>팩스: 02-760-4488</li>
            </ul>
          </p>
          <a className="btn btn-lg btn-primary" href="../components/navbar/" role="button">View navbar docs &raquo;</a>
        </div>
      </main>

      <footer>
        <div className="footer-container">
          <div className="footer-links">
            <a href="#">|  게시판보기  | </a>
            <a href="#">교수소개 사이트    | </a>
            <a href="#">한성대학교 커리큘럼  |</a>
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

export default IntroMain;
