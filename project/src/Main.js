import React from 'react';
import './Main.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // BrowserRouter 추가
import { Routes } from 'react-router-dom'; // Routes 추가


function Main() {
  return (

    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light fixed-top py-3" data-navbar-on-scroll="data-navbar-on-scroll">
          <div className="container">
          <Link to="/Main" className="navbar-brand d-flex align-items-center fw-semi-bold fs-3">
          <img className="me-3" src="./logo.png" alt="" />
        </Link>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse border-top border-lg-0 mt-4 mt-lg-0" id="navbarSupportedContent">
              <ul className="navbar-nav mx-auto pt-2 pt-lg-0 font-base">
                <li className="nav-item px-2" data-anchor="data-anchor">
                  <Link className="nav-link" to="/Notice">공지사항</Link></li>
                <li className="nav-item px-2" data-anchor="data-anchor">
                  <Link className="nav-link" to="/IntroMain">학부소개</Link></li>
                <li className="nav-item px-2" data-anchor="data-anchor">
                  <Link className="nav-link" to="/Community">커뮤니티</Link></li>
                <li className="nav-item px-2" data-anchor="data-anchor">
                  <Link className="nav-link" to="/Professor">교수진</Link></li>
                <li className="nav-item px-2" data-anchor="data-anchor">
                  <Link className="nav-link" to="/Qna">Qna</Link>
                </li>
              </ul>
              <form className="ps-lg-5">
                <Link to="/Login" className="btn btn-outline-primary order-0">
                  로그인
                </Link>
              </form>
            </div>
          </div>
        </nav>
      </header>

      <div className="main-content">
        <div className="banner">
          <img src="./banner.png" alt="Night View" />
        </div>

        <section id="services">

          <div className="container">
            <div className="row">
              <div className="col-lg-7 mx-auto text-center mb-4">
                <h5 className="fw-light fs-3 fs-lg-5 lh-sm mb-3">트랙소개</h5>
                <p className="mb-5">산업체 수요에 부합하고 창의적인 문제 해결 능력을 갖춘 인재를 양성하기 위해
                  트랙별 교과 과정 및 비교과 과정을 구축하고 있습니다</p>
              </div>
            </div>
            <div className="row flex-center h-100">
              <div className="col-xl-9">
                <div className="row justify-content-center">
                  <div className="col-md-4 mb-4">
                    <div className="card h-100 shadow px-4 px-md-2 px-lg-3 card-span pt-4">
                      <div className="text-center text-md-start card-hover"><img className="ps-3 icons" src="mobil_logo.png" height="60" alt="services" />
                        <div className="card-body">
                          <h6 className="fw-light fs-1 heading-color">모바일SW트랙</h6>
                          <p className="mt-3 mb-md-0 mb-lg-3">네트워크 지식과 프로그래밍 기술을 바탕으로 스마트폰 OS 및 소프트웨어 개발, 임베디드 소프트웨어 및 IoT 서비스 기술, 모바일 UI/UX 교육</p><a className="btn btn-lg ps-0 pe-3 text-primary" href="#" role="button">Learn more
                            <svg className="bi bi-arrow-right-short" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path>
                            </svg></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="card h-100 shadow px-4 px-md-2 px-lg-3 card-span pt-4">
                      <div className="text-center text-md-start card-hover"><img className="ps-3 icons" src="web_logo.png" height="60" alt="services" />
                        <div className="card-body">
                          <h6 className="fw-light fs-1 heading-color">웹 공학트랙</h6>
                          <p className="mt-3 mb-md-0 mb-lg-3">산업 현장에서 활용하고 있는 전문 기술 및 도구를 바탕으로 웹 서비스를 구축하고 분석할 수 있는 웹 공학 소프트웨어 개발 전문가 양성</p><a className="btn btn-lg ps-0 pe-3 text-primary" href="#" role="button">Learn more
                            <svg className="bi bi-arrow-right-short" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path>
                            </svg></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="card h-100 shadow px-4 px-md-2 px-lg-3 card-span pt-4">
                      <div className="text-center text-md-start card-hover"><img className="ps-3 icons" src="database_logo.png" height="60" alt="services" />
                        <div className="card-body">
                          <h6 className="fw-light fs-1 heading-color">빅데이터트랙</h6>
                          <p className="mt-3 mb-md-0 mb-lg-3">기본적인 데이터베이스 이론 및 설계 기술의 습득을 시작으로 다양한 분야에서 다양한 형태로 발생하는 빅데이터를 실질적으로 수집/분석/활용할 수 있는 데이터 마이닝 기술 및 실제 프로젝트 수행 교과목 등을 통해 사회 수요에 맞는 실무 중심의 교육 </p><a className="btn btn-lg ps-0 pe-3 text-primary" href="#" role="button">Learn more
                            <svg className="bi bi-arrow-right-short" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path>
                            </svg></a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-4 mb-4">
                    <div className="card h-100 shadow px-4 px-md-2 px-lg-3 card-span pt-4">
                      <div className="text-center text-md-start card-hover"><img className="ps-3 icons" src="vr_logo.png" height="60" alt="services" />
                        <div className="card-body">
                          <h6 className="fw-light fs-1 heading-color">디지털콘텐츠/가상현실 트랙</h6>
                          <p className="mt-3 mb-md-0 mb-lg-3">능숙한 콘텐츠 제작 도구 사용 기술을 바탕으로 실무적 콘텐츠 제작</p><a className="btn btn-lg ps-0 pe-3 text-primary" href="#" role="button">Learn more
                            <svg className="bi bi-arrow-right-short" xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" viewBox="0 0 16 16">
                              <path fill-rule="evenodd" d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"></path>
                            </svg></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="cs-guide2">
            <img src="./mobile.png" alt="guide2" />
          </div>
        </section>
        {/* 공지사항 출력 파트 */}
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
                  {/* 이하 다른 공지사항들도 유사하게 추가 */}
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
            {/* Add your location details here */}
            <p>위치: 한성대학교 공학관 A동 104호</p>
            <p>대중 교통: 한성대입구역(4호선) 2번 출구 마을버스 2번 승차, 창신역(6호선) 3번 출구 마을버스 3번 승차</p>
            <p>주소: 02876 서울시 성북구 삼선교로 16길 116 한성대학교</p>
            <p>연락처
              전화: 02-760-4137, 02-760-4438
              팩스: 02-760-4488</p>
            {/* ... other details ... */}
          </div>
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