import React from 'react';
import './style/Login.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'; 

function Student_Notice() {
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

            <div className="signin-container">
                <div className="signin-form">
                    <input type="text" placeholder="학번" id="email" />
                    <input type="password" placeholder="비밀번호" id="password" />

                    <Link to="/Main">
                        <input type="button" value="로그인" id="signin" />
                    </Link>                </div>
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

export default Student_Notice;
