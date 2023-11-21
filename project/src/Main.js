import React from 'react';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import Slider from './maincontents/Slider'; // 경로는 프로젝트 구조에 따라 조정
import images from './maincontents/images';

import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // BrowserRouter 추가
import { Routes } from 'react-router-dom'; // Routes 추가


function Main() {
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


      <div className="banner">
        <img src="./banner.png" alt="Night View" />
      </div>

      <section id="services">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto text-center mb-4">
              <h5 className="fw-light fs-3 fs-lg-5 lh-sm mb-3">트랙소개</h5>
              <p className="mb-5">산업체 수요에 부합하고 창의적인 문제 해결 능력을 갖춘 인재를 양성하기 위해 트랙별 교과 과정 및 비교과 과정을 구축하고 있습니다.</p>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-xl-10">
              <div className="row justify-content-center">
                <div className="col-md-3 mb-4">
                  <div className="card h-100 shadow px-4 px-md-2 px-lg-3 card-span pt-4">
                    <div className="text-center text-md-start card-hover">
                      <img className="ps-3 icons" src="mobil_logo.png" height="60" alt="services" />
                      <div className="card-body">
                        <h6 className="fw-light fs-1 heading-color">모바일SW트랙</h6>
                        <p className="mt-3 mb-md-0 mb-lg-3">네트워크 지식과 프로그래밍 기술을 바탕으로 스마트폰 OS 및 소프트웨어 개발,  모바일 UI/UX 교육</p>
                        <a className="btn btn-lg ps-0 pe-3 text-primary" href="#" role="button">Learn more</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-4">
                  <div className="card h-100 shadow px-4 px-md-2 px-lg-3 card-span pt-4">
                    <div className="text-center text-md-start card-hover">
                      <img className="ps-3 icons" src="web_logo.png" height="60" alt="services" />
                      <div className="card-body">
                        <h6 className="fw-light fs-1 heading-color">웹 공학트랙</h6>
                        <p className="mt-3 mb-md-0 mb-lg-3">산업 현장에서 활용하고 있는 전문 기술 및 도구를 바탕으로 서비스를 구축하는 소프트웨어 개발 전문가 양성</p>
                        <a className="btn btn-lg ps-0 pe-3 text-primary" href="#" role="button">Learn more</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-4">
                  <div className="card h-100 shadow px-4 px-md-2 px-lg-3 card-span pt-4">
                    <div className="text-center text-md-start card-hover">
                      <img className="ps-3 icons" src="database_logo.png" height="60" alt="services" />
                      <div className="card-body">
                        <h6 className="fw-light fs-1 heading-color">빅데이터트랙</h6>
                        <p className="mt-3 mb-md-0 mb-lg-3">기본적인 데이터베이스 이론 및 설계 기술의 습득을 시작으로 다양한 분야에 맞는 실무 중심의 교육</p>
                        <a className="btn btn-lg ps-0 pe-3 text-primary" href="#" role="button">Learn more</a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-3 mb-4">
                  <div className="card h-100 shadow px-4 px-md-2 px-lg-3 card-span pt-4">
                    <div className="text-center text-md-start card-hover">
                      <img className="ps-3 icons" src="vr_logo.png" height="60" alt="services" />
                      <div className="card-body">
                        <h6 className="fw-light fs-1 heading-color">디지털콘텐츠/가상현실 트랙</h6>
                        <p className="mt-3 mb-md-0 mb-lg-3">능숙한 콘텐츠 제작 도구 사용 기술을 바탕으로 실무적 콘텐츠 제작, 게임, VR, AR 등</p>
                        <a className="btn btn-lg ps-0 pe-3 text-primary" href="#" role="button">Learn more</a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="bg-100">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 mx-auto text-center my-5">
              <h5 className="fw-light fs-3 fs-lg-5 lh-sm mb-4">공지사항</h5>
              <p className="mb-3">컴퓨터공학부의 최신 공지사항을 소개합니다.</p>
            </div>
          </div>
          <div className="row flex-center h-100">
            <div className="col-xl-9">
              <div className="row justify-content-center">
                <div className="col-md-4 mb-4">
                  <div className="card h-100 shadow card-span"><img className="card-img-top" src="new_1.png" alt="news" style={{ marginTop: '2.5rem', marginBottom: '2.5rem' }} />
                    <div className="card-body">
                      <svg className="bi bi-calendar2 me-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
                        <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"> </path>
                      </svg><span className="fs--1">2023년 11월 16일</span>
                      <h5 className="fs-lg-1 my-3">★2023 동계 프로그래밍 캠프 모집 안내</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card h-100 shadow card-span"><img className="card-img-top" src="new_2.png" alt="news" style={{ marginTop: '2.5rem', marginBottom: '2.5rem' }} />
                    <div className="card-body">
                      <svg className="bi bi-calendar2 me-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
                        <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"> </path>
                      </svg><span className="fs--1">2023년 4월 6일</span>
                      <h5 className="fs-lg-1 my-3">★2023 동계 프로그래밍 캠프 모집 안내</h5>
                    </div>
                  </div>
                </div>
                <div className="col-md-4 mb-4">
                  <div className="card h-100 shadow card-span"><img className="card-img-top" src="new_3.png" alt="news" style={{ marginTop: '2.5rem', marginBottom: '2.5rem' }} />
                    <div className="card-body">
                      <svg className="bi bi-calendar2 me-2" xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z"></path>
                        <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z"> </path>
                      </svg><span className="fs--1">2023년 1월 12일</span>
                      <h5 className="fs-lg-1 my-3">★2023 동계 프로그래밍 캠프 모집 안내</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-12 d-flex justify-content-center my-3">
              <button className="btn btn-lg btn-primary fw-light" type="submit">더보기
                <svg className="bi bi-arrow-right-short" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                  <path fillRule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="slider">
        <Slider title="학과사진" slides={images} />
      </div>

      {/* 지도 부분 */}
      <div className="map-container">
        <iframe
          width="500"
          height="300"
          style={{ border: '0' }}
          loading="lazy"
          allowFullScreen
          src="https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=Place_ID_or_Coordinates">
        </iframe>
        <div className="location-details">
          <p>위치: 한성대학교 공학관 A동 104호</p>
          <p>대중 교통: 한성대입구역(4호선) 2번 출구 마을버스 2번 승차, 창신역(6호선) 3번 출구 마을버스 3번 승차</p>
          <p>주소: 02876 서울시 성북구 삼선교로 16길 116 한성대학교</p>
          <p>연락처
            전화: 02-760-4137, 02-760-4438
            팩스: 02-760-4488</p>
        </div>


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

export default Main;