import React from 'react';
import './style/Somoim_Content.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, BrowserRouter as Router, Route, Switch, useParams } from 'react-router-dom'; // BrowserRouter 추가
import  { useState, useEffect } from 'react';



const Somoim_Content=()=> {
  const {id} = useParams();
  const [somoim, setSomoim] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // 데이터를 가져오는 로직
        const response = await fetch('../somoim.json'); // data.json 파일 경로에 맞게 수정
        const data = await response.json();
        const selectedSomoim = data.somoims.find((somoim) => somoim.id === parseInt(id, 10));
        setSomoim(selectedSomoim);
      } catch (error) {
        console.error('Error fetching data:', error);
        
      }
    };

    fetchData();
  }, [id]);

  if (!somoim) {
    return <div>Loading...</div>;
  }

 
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

      <section className="somoim-intro">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-6">
        <img
          src={`${process.env.PUBLIC_URL}/${somoim.image}`}
          alt={`${somoim.name} 활동 사진`}
          className="Somoim_Content_Image"
        />
      </div>
      <div className="col-lg-6">
        <h2 className='Somoim_Content_Name'>{somoim.name}</h2>
        <p>
        
    
        </p>
        <p>
          {somoim.description}
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

export default Somoim_Content;