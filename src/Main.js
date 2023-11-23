
import './Main.css';
import './header/notice_filter/filter.css'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Slider from './maincontents/Slider'; // 경로는 프로젝트 구조에 따라 조정
import images from './maincontents/images';

import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // BrowserRouter 추가
import { Routes } from 'react-router-dom'; // Routes 추가
import React, { useState } from 'react';

import TagInput from './header/notice_filter/TagInput';
import ExampleList from './header/notice_filter/ExampleList';
import projects from './header/notice_filter/projects';



function Main() {

  const [tags, setTags] = useState(['동아리']);

  const handleTagChange = (tags) => {
    setTags(tags);
  };

  const handleListTagClick = (tag) => {
    setTags([...tags, tag]);
  };
  return (

    <div>
      <header>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
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
                  <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
                  <Link className="nav-link dropdown-toggle" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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


      {/* 이 곳에 기능 구현 */}
      {/* TagInput 및 ExampleList 추가 */}
      <section id="tagSection" className="mb-4">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mx-auto text-center">
              <h5 className="fw-light fs-3 fs-lg-5 lh-sm mb-4">중요 공지</h5>
              <TagInput onTagChange={handleTagChange} tags={tags} />
              <ExampleList items={projects} filter={tags} onTagClick={handleListTagClick} />
            </div>
          </div>
        </div>
      </section>

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
          <div className="footer-info" >
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