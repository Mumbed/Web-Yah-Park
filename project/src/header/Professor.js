import React from 'react';
import './style/Professor.css'; // App.css 파일에 추가적인 스타일링을 적용할 수 있습니다.
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // BrowserRouter 추가
import { Routes } from 'react-router-dom'; // Routes 추가

function Professor() {
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

            <div class="board">
                <div class="main-pro">
                    <div class="between">

                    <div class="component-con">
                            <div class="dongimg">
                                <img src="/Image/king.jpeg" alt="로고" class="logo-image" />
                            </div>
                            <div class="description">
                                <p>박승현</p>
                                <p>사무실 : 02-760-4120</p>
                                <p>이메일 :</p>
                                <p>sp AT hansung.ac.kr	</p>

                            </div>
                        </div>
                        <div class="component-con">
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

                        <div class="component-con">
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

                        <div class="component-con">
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

                        <div class="component-con">
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

                        <div class="component-con">
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

                        <div class="component-con">
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

                        <div class="component-con">
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

                        <div class="component-con">
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

                        <div class="component-con">
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

                        <div class="component-con">
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

                        <div class="component-con">
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

                        <div class="component-con">
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

                        <div class="component-con">
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

                        <div class="component-con">
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


                        <div class="component-con">
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

                        <div class="component-con">
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

                        <div class="component-con">
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

                        <div class="component-con">
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


                        <div class="component-con">
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

                        <div class="component-con">
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

                        <div class="component-con">
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
