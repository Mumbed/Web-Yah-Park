import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'semantic-ui-css/semantic.min.css';

import './style/IntroWeb.css'; // CSS 파일을 import 합니다.

import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // BrowserRouter 추가
import { Routes } from 'react-router-dom'; // Routes 추가
import { Collection, GearFill, Speedometer, Table } from 'react-bootstrap-icons';
import { useState } from 'react';

function IntroWeb() {
  const [isExpanded, setIsExpanded] = useState({
    introduction: false,
    educationObjective: false,
    skillDevelopment: false,
    requiredCourses: false,
  });

  // 섹션을 클릭할 때 호출되는 함수
  const handleSectionClick = (section) => {
    setIsExpanded((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
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

      <main className="main-content card-container">
        {/* 첫 번째 섹션 */}
        {/* <section className="card"> */}
        
        <div className="ui raised link card">
  <div className="content">
    <div className="header">웹공학트랙 소개</div>
    <div className="meta">
      {/* <span class="category">1</span> */}
    </div>
    <div className="description">
      <p className="card-title" onClick={() => handleSectionClick('educationObjective')}>
      학문적 기반 및 산업과의 연계 비전</p>
            {isExpanded.educationObjective && (
              <div>
                <p>클라우드 환경을 이해하고 웹 서비스를 개발 및 배포하는 분야</p><p>IoT, 빅데이터와의 연동을 통한 다양한 융합 서비스(금융, 국방, 재난안전, 에너지 등)의 핵심 인프라 기술</p>
              </div>
            )}
    </div>
    <div className="meta">
      {/* <span className="category">2</span> */}
    </div>
    <div className="description">
      <p className="card-title" onClick={() => handleSectionClick('educationObjective')}>
      인력양성 목표</p>
            {isExpanded.educationObjective && (
              <div>
                 
                <p>산업 현장에서 활용하고 있는 전문 기술 및 도구를 바탕</p>
                <p>웹 서비스를 구축하고 분석</p>
                <p> 웹 공학 소프트웨어 개발 전문가 양성</p>
                
              </div>
            )}
    </div>
    <div class="meta">
      {/* <span class="category">3</span> */}
    </div>
    <div className="description">
      <p className="card-title" onClick={() => handleSectionClick('educationObjective')}>
      교육내용 중점</p>
            {isExpanded.educationObjective && (
              <div>
                <p>문제 해결 능력과 시스템 구축 능력을 배양</p>
                <p>산업체에서 활용하고 있는 소프트웨어 프레임워크를 통한 실무 프로젝트 교육</p>
                
              </div>
            )}
    </div>
  </div>
  <div className="extra content">
    <div className="right floated author">
      
    </div>
    
  </div>
</div>
        {/* </section> */}

        {/* 두 번째 섹션 */}
        <div className="ui raised link card">
  <div className="content">
    <div className="header">웹공학트랙 교육목표</div>
    <div className="meta">
      <span class="category">기초</span>
    </div>
    <div className="description">
      <p className="card-title" onClick={() => handleSectionClick('educationObjective')}>
      개념의 이해</p>
            {isExpanded.educationObjective && (
              <div>
                
                <p>
                네트워크 및 데이터베이스 설계 개념 이해
                </p>
              </div>
            )}
    </div>
    <div className="meta">
      <span className="category">핵심</span>
    </div>
    <div className="description">
      <p className="card-title" onClick={() => handleSectionClick('educationObjective')}>
      활용 능력</p>
            {isExpanded.educationObjective && (
              <div>
               <p>웹 프레임워크 활용 능력 배양</p>
              </div>
            )}
    </div>
    <div class="meta">
      <span class="category">심화</span>
    </div>
    <div className="description">
      <p className="card-title" onClick={() => handleSectionClick('educationObjective')}>
      서비스 개발</p>
            {isExpanded.educationObjective && (
              <div>
                <p>클라이언트-서버 구조에 기반한 웹 서비스 개발</p>
              </div>
            )}
    </div>
    <div class="meta">
      <span class="category">활용</span>
    </div>
    <div className="description">
      <p className="card-title" onClick={() => handleSectionClick('educationObjective')}>
      협업 활동</p>
            {isExpanded.educationObjective && (
              <div>
                <p>클라우드 환경하에서 웹 서비스 배포 및 협업 프로세스 구축</p>
              </div>
            )}
    </div>
  </div>
  <div className="extra content">
    <div className="right floated author">
      
    </div>
    
  </div>
  
</div>

<div class="ui card">
  <div class="content">
    <div class="center aligned header">트랙육성역량</div>
    <div class="center aligned description">
      <p>웹 애플리케이션 개발 및 구현 역량</p>
      <p>웹 프레임워크를 활용한 서비스 설계 역량</p>
      <p>웹 애플리케이션 구축 및 배포 역량</p>
      <p>공학적 사고 역량</p>
      <p>협업 프로세스 구축 역량</p>

    </div>
  </div>
  <div class="extra content">
    <div class="center aligned author">
       
    </div>
  </div>
</div>


<div class="ui two column grid">
  <div class="column">
    <div class="ui raised segment">
      <a class="ui red ribbon label">프로그래밍</a>
      
      <p>웹프로그래밍, 웹서버프로그래밍</p>
      <a class="ui blue ribbon label">웹프레임워크</a> 
      <p>웹프레임워크1, 웹프레임워크2</p>
    </div>
  </div>
  <div class="column">
    <div class="ui segment">
      <a class="ui orange right ribbon label">캡스톤</a>
      <p>웹공학 캡스톤디자인</p>
      <a class="ui teal right ribbon label">클라우드</a>
      <p>클라우드컴퓨팅, 웹공학 취창업</p>
    </div>
  </div>
</div>



      </main>
    

{/* <main className="main-content card-container">
  

      
        <section className="card">
          <div className="card-body">
            <h2 className="card-title">웹공학트랙 소개</h2>
            <p className="card-text">(학문적 기반 및 산업과의 연계 비전) 클라우드 환경을 이해하고 웹 서비스를 개발 및 배포하는 분야로서 IoT, 빅데이터와의 연동을 통해 다양한 융합 서비스(금융, 국방, 재난안전, 에너지 등)의 핵심 인프라 기술임</p>
            <p className="card-text">(인력양성 목표) 산업 현장에서 활용하고 있는 전문 기술 및 도구를 바탕으로 웹 서비스를 구축하고 분석할 수 있는 웹 공학 소프트웨어 개발 전문가 양성</p>
            <p className="card-text">(교육내용 중점) 문제 해결 능력과 시스템 구축 능력을 배양하기 위해 산업체에서 활용하고 있는 소프트웨어 프레임워크를 통한 실무 프로젝트 교육</p>
          </div>
        </section>

        <section className="card">
          <div className="card-body">
            <h2 className="card-title">웹공학트랙 교육목표</h2>
            <p className="card-text">(기초) 네트워크 및 데이터베이스 설계 개념 이해</p>
            <p className="card-text">(핵심) 웹 프레임워크 활용 능력 배양</p>
            <p className="card-text">(심화) 클라이언트-서버 구조에 기반한 웹 서비스 개발</p>
            <p className="card-text">(활용) 클라우드 환경하에서 웹 서비스 배포 및 협업 프로세스 구축  </p>
          </div>
        </section>

        <section className="card">
          <div className="card-body">
            <h2 className="card-title">트랙육성역량</h2>
            <p className="card-text">웹 애플리케이션 개발 및 구현 역량</p>
            <p className="card-text">웹 프레임워크를 활용한 서비스 설계 역량</p>
            <p className="card-text">웹 애플리케이션 구축 및 배포 역량</p>
            <p className="card-text">공학적 사고 역량 </p>
            <p className="card-text">협업 프로세스 구축 역량 </p>
          </div>
        </section>

        <section className="card">
          <div className="card-body">
            <h2 className="card-title">필수 교과목</h2>
            <p className="card-text">웹프로그래밍, 웹서버프로그래밍</p>
            <p className="card-text">웹 프레임워크를 활용한 서비스 설계 역량</p>
            <p className="card-text">웹 애플리케이션 구축 및 배포 역량</p>
            <p className="card-text">공학적 사고 역량 </p>
            <p className="card-text">협업 프로세스 구축 역량 </p>
          </div>
        </section>
      </main> } */}

    



      {/* <h1 className="visually-hidden"></h1>

      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">웹 공학 트랙</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" className="bi bi-book-half" viewBox="0 0 16 16">
              <path d="M8.5 2.687c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.810-1.094-.111-2.278-.039-3.213.492V2.687zM8 1.783C7.015.936 5.587.810 4.287.940c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.020 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.020A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z" />
            </svg>
            <h3 className="fs-2 text-body-emphasis">학문적 기반 및 산업과의 연계 비전</h3>
            <p>클라우드 환경을 이해하고 웹 서비스를 개발 및 배포하는 분야로서 IoT, 빅데이터와의 연동을 통해 다양한 융합 서비스(금융, 국방, 재난안전, 에너지 등)의 핵심 인프라 기술임</p>
          </div>
          <div className="feature col">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" className="bi bi-people-fill" viewBox="0 0 16 16">
              <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" />
            </svg>
            <h3 className="fs-2 text-body-emphasis">인력양성 목표</h3>
            <p>산업 현장에서 활용하고 있는 전문 기술 및 도구를 바탕으로 웹 서비스를 구축하고 분석할 수 있는 웹 공학 소프트웨어 개발 전문가 양성</p>
          </div>
          <div className="feature col">
            <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" fill="currentColor" className="bi bi-receipt" viewBox="0 0 16 16">
              <path d="M1.92.506a.5.5 0 0 1 .434.14L3 1.293l.646-.647a.5.5 0 0 1 .708 0L5 1.293l.646-.647a.5.5 0 0 1 .708 0L7 1.293l.646-.647a.5.5 0 0 1 .708 0L9 1.293l.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .708 0l.646.647.646-.647a.5.5 0 0 1 .801.13l.5 1A.5.5 0 0 1 15 2v12a.5.5 0 0 1-.053.224l-.5 1a.5.5 0 0 1-.8.13L13 14.707l-.646.647a.5.5 0 0 1-.708 0L11 14.707l-.646.647a.5.5 0 0 1-.708 0L9 14.707l-.646.647a.5.5 0 0 1-.708 0L7 14.707l-.646.647a.5.5 0 0 1-.708 0L5 14.707l-.646.647a.5.5 0 0 1-.708 0L3 14.707l-.646.647a.5.5 0 0 1-.801-.13l-.5-1A.5.5 0 0 1 1 14V2a.5.5 0 0 1 .053-.224l.5-1a.5.5 0 0 1 .367-.27zm.217 1.338L2 2.118v11.764l.137.274.51-.51a.5.5 0 0 1 .707 0l.646.647.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.646.646.646-.646a.5.5 0 0 1 .708 0l.509.509.137-.274V2.118l-.137-.274-.51.51a.5.5 0 0 1-.707 0L12 1.707l-.646.647a.5.5 0 0 1-.708 0L10 1.707l-.646.647a.5.5 0 0 1-.708 0L8 1.707l-.646.647a.5.5 0 0 1-.708 0L6 1.707l-.646.647a.5.5 0 0 1-.708 0L4 1.707l-.646.647a.5.5 0 0 1-.708 0l-.509-.51z" />
              <path d="M3 4.5a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h6a.5.5 0 1 1 0 1h-6a.5.5 0 0 1-.5-.5zm8-6a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 0 1h-1a.5.5 0 0 1-.5-.5z" />
            </svg>
            <h3 className="fs-2 text-body-emphasis">교육내용 중점</h3>
            <p>문제 해결 능력과 시스템 구축 능력을 배양하기 위해 산업체에서 활용하고 있는 소프트웨어 프레임워크를 통한 실무 프로젝트 교육</p>
          </div>
        </div>
      </div>

      <div className="b-example-divider"></div>

      <div className="container px-4 py-5" id="hanging-icons">
        <h2 className="pb-2 border-bottom">필수 교과목</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="col d-flex align-items-start">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
            <div>
              <h3 className="fs-2 text-body-emphasis">웹프로그래밍, 웹서버프로그래밍</h3>
              <p></p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
            <div>
              <h3 className="fs-2 text-body-emphasis">웹프레임워크1, 웹프레임워크2</h3>
              <p></p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
            <div>
              <h3 className="fs-2 text-body-emphasis">웹공학 캡스톤디자인</h3>
              <p></p>
            </div>
          </div>
          <div className="col d-flex align-items-start">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
              <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
            </svg>
            <div>
              <h3 className="fs-2 text-body-emphasis">클라우드컴퓨팅, 웹공학 취창업</h3>
              <p></p>
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
              <path d="M5.5.5a.5.5 0 0 0-1 0V2A2.5 2.5 0 0 0 2 4.5H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2v1H.5a.5.5 0 0 0 0 1H2A2.5 2.5 0 0 0 4.5 14v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14h1v1.5a.5.5 0 0 0 1 0V14a2.5 2.5 0 0 0 2.5-2.5h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14v-1h1.5a.5.5 0 0 0 0-1H14A2.5 2.5 0 0 0 11.5 2V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5a.5.5 0 0 0-1 0V2h-1V.5zm1 4.5h3A1.5 1.5 0 0 1 11 6.5v3A1.5 1.5 0 0 1 9.5 11h-3A1.5 1.5 0 0 1 5 9.5v-3A1.5 1.5 0 0 1 6.5 5z" />
            </svg>
            <div>
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis"></h3>
              <p>웹 애플리케이션 개발 및 구현 역량</p>
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
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis"></h3>
              <p>웹 프레임워크를 활용한 서비스 설계 역량</p>
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
              <h3 className="fw-bold mb-0 fs-4 text-body-emphasis"></h3>
              <p>웹 애플리케이션 구축 및 배포 역량</p>
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
                <h3 className="fw-bold mb-0 fs-4 text-body-emphasis"></h3>
                <p>협업 프로세스 구축 역량</p>
              </div>
            </div>


          </div>
        </div>

        <div className="b-example-divider"></div>

        <div className="container px-4 py-5" id="hanging-icons">
          <h2 className="pb-2 border-bottom">필수 교과목</h2>
          <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
            <div className="col d-flex align-items-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
              <div>
                <h3 className="fs-2 text-body-emphasis">웹프로그래밍, 웹서버프로그래밍</h3>
                <p></p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
              <div>
                <h3 className="fs-2 text-body-emphasis">웹프레임워크1, 웹프레임워크2</h3>
                <p></p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
              <div>
                <h3 className="fs-2 text-body-emphasis">웹공학 캡스톤디자인</h3>
                <p></p>
              </div>
            </div>
            <div className="col d-flex align-items-start">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" className="bi bi-caret-right-fill" viewBox="0 0 16 16">
                <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z" />
              </svg>
              <div>
                <h3 className="fs-2 text-body-emphasis">클라우드컴퓨팅, 웹공학 취창업</h3>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="b-example-divider"></div> */}
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

export default IntroWeb;