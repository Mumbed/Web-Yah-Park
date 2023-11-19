import React from 'react';
import './style/Professor.css'; // App.css 파일에 추가적인 스타일링을 적용할 수 있습니다.
import 'bootstrap/dist/css/bootstrap.min.css';

import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // BrowserRouter 추가
import { Routes } from 'react-router-dom'; // Routes 추가

function Professor() {
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

            <div class="board">
                <div class="sidebar">
                    <ul>
                        <li><a href="hewgong.html">학생회 공지사항</a></li>
                        <li><a href="test.html">동아리</a></li>
                        <li><a href="somoim.html">소모임</a></li>
                    </ul>
                </div>

                <div class="main-content">

                    <div class="between">
                        <div class="component-container">
                            <div class="dongimg">
                                <img src="Image/GyeHeewon.png" alt="로고" class="logo-image" />
                            </div>
                            <div class="description">
                                <p>계희원</p>
                                <p>사무실 : 02-760-8014</p>
                                <p>이메일 :</p>
                                <p>kuei AT hansung.ac.kr</p>

                            </div>
                        </div>

                        <div class="component-container">
                            <div class="dongimg">
                                <img src="Image/HanKiJoon.jpg" alt="로고" class="logo-image" />
                            </div>
                            <div class="description">
                                <p>한기준</p>
                                <p>사무실 : 02-760-4328</p>
                                <p>이메일 :</p>
                                <p>keejun.han@hansung.ac.kr</p>

                            </div>
                        </div>

                        <div class="component-container">
                            <div class="dongimg">
                                <img src="Image/HeoJunYoung.jpg" alt="로고" class="logo-image" />
                            </div>
                            <div class="description">
                                <p>허준영</p>
                                <p>사무실 : 02-760-8039</p>
                                <p>이메일 : </p>
                                <p>jyheo AT hansung.ac.kr</p>

                            </div>
                        </div>

                        <div class="component-container">
                            <div class="dongimg">
                                <img src="Image/HwangHoYoung.png" alt="로고" class="logo-image" />
                            </div>
                            <div class="description">
                                <p>황호영</p>
                                <p>사무실 : 02-760-5964</p>
                                <p>이메일 : </p>
                                <p>hyhwang AT hansung.ac.kr</p>

                            </div>
                        </div>

                        <div class="component-container">
                            <div class="dongimg">
                                <img src="Image/HwangKiTae.gif" alt="로고" class="logo-image" />
                            </div>
                            <div class="description">
                                <p>황기태</p>
                                <p>사무실 : 02-760-4300</p>
                                <p>이메일 : </p>
                                <p>calafk AT hansung.ac.kr</p>

                            </div>
                        </div>

                        <div class="component-container">
                            <div class="dongimg">
                                <img src="Image/JangJaeYoung.jpg" alt="로고" class="logo-image" />
                            </div>
                            <div class="description">
                                <p>장재영</p>
                                <p>사무실 : 02-760-4495</p>
                                <p>이메일 : </p>
                                <p>jychang AT hansung.ac.kr</p>

                            </div>
                        </div>

                        <div class="component-container">
                            <div class="dongimg">
                                <img src="Image/JoSeHong.png" alt="로고" class="logo-image" />
                            </div>
                            <div class="description">
                                <p>조세홍</p>
                                <p>사무실 : 02-760-4478</p>
                                <p>이메일 : </p>
                                <p>chosh AT hansung.ac.kr</p>

                            </div>
                        </div>

                        <div class="component-container">
                            <div class="dongimg">
                                <img src="Image/JungInHwan.jpg" alt="로고" class="logo-image" />
                            </div>
                            <div class="description">
                                <p>정인환</p>
                                <p>사무실 : 02-760-4136</p>
                                <p>이메일 : </p>
                                <p>ihjung AT hansung.ac.kr</p>

                            </div>
                        </div>

                        <div class="component-container">
                            <div class="dongimg">
                                <img src="Image/JungInSang.gif" alt="로고" class="logo-image" />
                            </div>
                            <div class="description">
                                <p>정인상</p>
                                <p>사무실 : 02-760-4301</p>
                                <p>이메일 : </p>
                                <p>insang AT hansung.ac.kr</p>

                            </div>
                        </div>

                        <div class="component-container">
                            <div class="dongimg">
                                <img src="Image/kangheejoong.gif" alt="로고" class="logo-image" />
                            </div>
                            <div class="description">
                                <p>강희중</p>
                                <p>사무실 : 02-760-4131</p>
                                <p>이메일 : </p>
                                <p>hjkang AT hansung.ac.kr</p>

                            </div>
                        </div>

                        <div class="component-container">
                            <div class="dongimg">
                                <img src="Image/KimHero.jpg" alt="로고" class="logo-image" />
                            </div>
                            <div class="description">
                                <p>김영웅</p>
                                <p>사무실 : 02-760-4311</p>
                                <p>이메일 : </p>
                                <p>yukim AT hansung.ac.kr</p>

                            </div>
                        </div>

                        <div class="component-container">
                            <div class="dongimg">
                                <img src="Image/KimJinHwan.png" alt="로고" class="logo-image" />
                            </div>
                            <div class="description">
                                <p>김진환</p>
                                <p>사무실 : 02-760-4340</p>
                                <p>이메일 : </p>
                                <p>kimjh AT hansung.ac.kr</p>

                            </div>
                        </div>

                        <div class="component-container">
                            <div class="dongimg">
                                <img src="Image/KimJinMo.jpeg" alt="로고" class="logo-image" />
                            </div>
                            <div class="description">
                                <p>김진모</p>
                                <p>사무실 : 02-760-4046</p>
                                <p>이메일 : </p>
                                <p>jinmo.kim AT hansung.ac.kr</p>

                            </div>
                        </div>

                        <div class="component-container">
                            <div class="dongimg">
                                <img src="Image/KimNamYoon.jpg" alt="로고" class="logo-image" />
                            </div>
                            <div class="description">
                                <p>김남윤</p>
                                <p>사무실 : 02-760-4348</p>
                                <p>이메일 : </p>
                                <p>jnykim AT hansung.ac.kr</p>

                            </div>
                        </div>


                        <div class="component-container">
                            <div class="dongimg">
                                <img src="Image/KimSungDong.jpg" alt="로고" class="logo-image" />
                            </div>
                            <div class="description">
                                <p>김성동</p>
                                <p>사무실 : 02-760-4161</p>
                                <p>이메일 : </p>
                                <p>sdkim AT hansung.ac.kr</p>

                            </div>
                        </div>

                        <div class="component-container">
                            <div class="dongimg">
                                <img src="Image/KwonYoungMi.png" alt="로고" class="logo-image" />
                            </div>
                            <div class="description">
                                <p>권영미</p>
                                <p>사무실 : 02-760-4134</p>
                                <p>이메일 :  </p>
                                <p>ymkwon AT hansung.ac.kr</p>

                            </div>
                        </div>

                        <div class="component-container">
                            <div class="dongimg">
                                <img src="Image/LeeHangChan.png" alt="로고" class="logo-image" />
                            </div>
                            <div class="description">
                                <p>이항찬</p>
                                <p>사무실 : 02-760-4307</p>
                                <p>이메일 : </p>
                                <p>lhangch AT hansung.ac.kr</p>

                            </div>
                        </div>

                        <div class="component-container">
                            <div class="dongimg">
                                <img src="Image/LeeJaemoon.png" alt="로고" class="logo-image" />
                            </div>
                            <div class="description">
                                <p>이재문</p>
                                <p>사무실 : 02-760-4135</p>
                                <p>이메일 : </p>
                                <p>jmlee AT hansung.ac.kr</p>

                            </div>

                        </div>


                        <div class="component-container">
                            <div class="dongimg">
                                <img src="Image/Leejieun.jpg" alt="로고" class="logo-image" />
                            </div>
                            <div class="description">
                                <p>이지은</p>
                                <p>사무실 : 02-760-4341</p>
                                <p>이메일 : </p>
                                <p>jieunlee AT hansung.ac.kr</p>

                            </div>
                        </div>

                        <div class="component-container">
                            <div class="dongimg">
                                <img src="Image/LeeSuckki.jpg" alt="로고" class="logo-image" />
                            </div>
                            <div class="description">
                                <p>이석기</p>
                                <p>사무실 : 02-760-8011</p>
                                <p>이메일 : </p>
                                <p>seelee AT hansung.ac.kr</p>

                            </div>
                        </div>

                        <div class="component-container">
                            <div class="dongimg">
                                <img src="Image/Um.png" alt="로고" class="logo-image" />
                            </div>
                            <div class="description">
                                <p>엄종석</p>
                                <p>사무실 : 02-760-4133</p>
                                <p>이메일 : </p>
                                <p>jsum AT hansung.ac.kr</p>

                            </div>

                        </div>
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
export default Professor;
