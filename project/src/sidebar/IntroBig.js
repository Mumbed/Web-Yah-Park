import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import './style/IntroBig.css';

import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 
import { Routes } from 'react-router-dom'; 
import { Collection, GearFill, Speedometer, Table } from 'react-bootstrap-icons';
import { useEffect } from 'react';

function IntroBig() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
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

      <h1 className="visually-hidden"></h1>

      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">빅데이터 트랙</h2>

        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              fill="currentColor"
              className="bi bi-book-half"
              viewBox="0 0 16 16"
            >
              <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.810-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.810 4.287.940 3.355 1.093 1.828 1.613.375 2.224A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.020 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
            </svg>
            <h3 className="fs-2 text-body-emphasis">학문적 기반 및 산업과의 연계 비전</h3>
            <p>
              ICT 분야의 인프라가 되는 데이터베이스의 구축에서부터 수집된 데이터의
              분석과 전략적인 활용에 필요한 여러 가지 이론과 기술을 배양하는 분야로
              국내 빅데이터 시장 규모는 2010년 이후 연평균 25%씩 성장하여 2015년의 경우
              시장규모가 약 2.6억 달러 규모에 이를 정도로 관련 산업이 급성장 중임
            </p>
          </div>
          <div className="feature col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              fill="currentColor"
              className="bi bi-people-fill"
              viewBox="0 0 16 16"
            >
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
            </svg>
            <h3 className="fs-2 text-body-emphasis">인력양성 목표</h3>
            <p>
              (인력양성 목표) 의사결정지원에 요구되는 추천/예측을 위한 빅데이터 분석을
              전문적으로 수행할 수 있는 인재양성
            </p>
          </div>
          <div className="feature col">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33"
              height="33"
              fill="currentColor"
              className="bi bi-receipt"
              viewBox="0 0 16 16"
            >
              <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
              <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
            </svg>
            <h3 className="fs-2 text-body-emphasis">교육내용 중점</h3>
            <p>
              기본적인 데이터베이스 이론 및 설계 기술의 습득을 시작으로 다양한 분야에서
              다양한 형태로 발생하는 빅데이터를 실질적으로 수집/분석/활용할 수 있는
              데이터 마이닝 기술 및 실제 프로젝트 수행 교과목 등을 통해 사회 수요에 맞는
              실무 중심의 교육을 실시
            </p>
          </div>
        </div>
      </div>

      <div className="b-example-divider"></div>

      <div className="container px-4 py-5" id="hanging-icons">
        <h2 className="pb-2 border-bottom">필수 교과목</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="col d-flex align-items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-caret-right-fill"
              viewBox="0 0 16 16"
            >
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
            <div>
              <h3 className="fs-2 text-body-emphasis">빅데이터기초, 데이터마이닝</h3>
              <p>필수 교과목 내용을 여기에 추가하세요.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-caret-right-fill"
              viewBox="0 0 16 16"
            >
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
            <div>
              <h3 className="fs-2 text-body-emphasis">데이터베이스설계, 빅데이터프로그래밍</h3>
              <p>필수 교과목 내용을 여기에 추가하세요.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-caret-right-fill"
              viewBox="0 0 16 16"
            >
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
            <div>
              <h3 className="fs-2 text-body-emphasis">웹공학 캡스톤디자인</h3>
              <p>필수 교과목 내용을 여기에 추가하세요.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="26"
              height="26"
              fill="currentColor"
              className="bi bi-caret-right-fill"
              viewBox="0 0 16 16"
            >
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
            <div>
              <h3 className="fs-2 text-body-emphasis">빅데이터 캡스톤디자인, 인공지능, 빅데이터 취창업</h3>
              <p>필수 교과목 내용을 여기에 추가하세요.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="b-example-divider"></div>



      <div className="container px-4 py-5" id="icon-grid">
        <h2 className="pb-2 border-bottom">트랙육성역량</h2>

        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-5">
          <div className="col d-flex align-items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-cpu-fill"
              viewBox="0 0 16 16"
              style={{ paddingLeft: '5px' }}
            >
              <path d="M6.5 6a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
              <path d="M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5z" />
            </svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">데이터베이스 소프트웨어 개발 및 구현 역량</h3>
              <p>데이터베이스 소프트웨어 개발 및 구현 역량 내용을 여기에 추가하세요.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-pc-display-horizontal"
              viewBox="0 0 16 16"
            >
              <path d="M1.5 0A1.5 1.5 0 0 0 0 1.5v7A1.5 1.5 0 0 0 1.5 10H6v1H1a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1h-5v-1h4.5A1.5 1.5 0 0 0 16 8.5v-7A1.5 1.5 0 0 0 14.5 0h-13Zm0 1h13a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5ZM12 12.5a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0Zm2 0a.5.5 0 1 1 1 0 .5.5 0 0 1-1 0ZM1.5 12h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1 0-1ZM1 14.25a.25.25 0 0 1 .25-.25h5.5a.25.25 0 1 1 0 .5h-5.5a.25.25 0 0 1-.25-.25Z" />
            </svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">빅데이터 소프트웨어 설계 및 분석 역량</h3>
              <p>빅데이터 소프트웨어 설계 및 분석 역량 내용을 여기에 추가하세요.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              fill="currentColor"
              className="bi bi-microsoft"
              viewBox="0 0 16 16"
            >
              <path d="M7.462 0H0v7.19h7.462V0zM16 0H8.538v7.19H16V0zM7.462 8.211H0V16h7.462V8.211zm8.538 0H8.538V16H16V8.211z" />
            </svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">데이터마이닝 소프트웨어 개발 및 구현 역량</h3>
              <p>데이터마이닝 소프트웨어 개발 및 구현 역량 내용을 여기에 추가하세요.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-usb-drive-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6 .5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4H6v-4ZM7 1v1h1V1H7Zm2 0v1h1V1H9ZM5.5 5a.5.5 0 0 0-.5.5V15a1 1 0 0 0 1 1h5a1 1 0 0 0 1-1V5.5a.5.5 0 0 0-.5-.5h-6Z" />
            </svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">IoT 서비스 개발</h3>
              <p>IoT 서비스 개발 역량 내용을 여기에 추가하세요.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="currentColor"
              className="bi bi-hdd-network-fill"
              viewBox="0 0 16 16"
            >
              <path d="M2 2a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h5.5v3A1.5 1.5 0 0 0 6 11.5H.5a.5.5 0 0 0 0 1H6A1.5 1.5 0 0 0 7.5 14h1a1.5 1.5 0 0 0 1.5-1.5h5.5a.5.5 0 0 0 0-1H10A1.5 1.5 0 0 0 8.5 10V7H14a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm.5 3a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm2 0a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1z" />
            </svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis">공학문서 작성 및 의사소통 역량</h3>
              <p>공학문서 작성 및 의사소통 역량 내용을 여기에 추가하세요.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="b-example-divider"></div>

      <div className="container px-4 py-5">
        <h2 className="pb-2 border-bottom">교육목표</h2>

        <div className="row row-cols-1 row-cols-md-2 align-items-md-center g-5 py-5">
          <div className="col d-flex flex-column align-items-start gap-2">
            <h2 className="fw-bold text-body-emphasis">트랙교육목표</h2>
            <p className="text-body-secondary">산업체 수요에 기반한 전공 교육을 통해 현장 친화적 인재 양성
              최신 ICT 기술 동향을 파악하고 선도할 수 있는 능동적 인재 양성
              체계적인 프로젝트 수행을 통해 문제해결 능력과 시스템 구축 능력을 가진 인재 양성</p>
            <a href="#" className="btn btn-primary btn-lg">Primary button</a>
          </div>

          <div className="col">
            <div className="row row-cols-1 row-cols-sm-2 g-4">
              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3" style={{ color: 'white' }}>
                  <Collection />
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">기초</h4>
                <p className="text-body-secondary">데이터베이스 이론 및 빅데이터 관련 소프트웨어 기초 확립</p>
              </div>

              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3" style={{ color: 'white' }}>
                  <GearFill />
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">핵심</h4>
                <p className="text-body-secondary">핵심 기술을 적용한 모바일 소프트웨어 설계</p>
              </div>

              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3" style={{ color: 'white' }}>
                  <Speedometer />
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">심화</h4>
                <p className="text-body-secondary">다양한 인공지능 및 통계 기법을 적용한 데이터마이닝 소프트웨어 설계</p>
              </div>

              <div className="col d-flex flex-column gap-2">
                <div className="feature-icon-small d-inline-flex align-items-center justify-content-center text-bg-primary bg-gradient fs-4 rounded-3" style={{ color: 'white' }}>
                  <Table />
                </div>
                <h4 className="fw-semibold mb-0 text-body-emphasis">활용</h4>
                <p className="text-body-secondary">기업과 연계된 빅데이터 분석 소프트웨어의 활용 및 응용</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      <div className="b-example-divider"></div>

      <footer>
        <div className="footer-container">
          
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

export default IntroBig;
