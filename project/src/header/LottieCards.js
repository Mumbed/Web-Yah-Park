// LottieCards.js

import React from 'react';
import './LottieCards.css';
import Lottie from 'react-lottie';
import cardData from './cardData';  // 경로를 실제 파일 경로로 수정
import { Link, BrowserRouter as Router, Route, Switch } from 'react-router-dom'; // BrowserRouter 추가

const LottieCards = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: cardData[0].lottieData,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice',
    },
  };

  return (
    <div style={{ marginTop: '10rem' }}>
      <h3 className="text-center fw-bold"><i className="fa-brands fa-medium pe-3"></i>트랙소개</h3>
      <div className="hr-line mt-4 mb-4"></div>
      <div className="d-flex flex-wrap gap-5 justify-content-evenly pt-4">
        {cardData.map((card, index) => (
          <div key={index} className="col-lg-5">
            <div className="card p-4">
              <div className="row">
                <div className="lottie_container m-3">
                <Lottie options={{ loop: true, autoplay: true, animationData: card.lottieData, rendererSettings: { preserveAspectRatio: 'xMidYMid slice' } }} height={240} width={240} />
                </div>
                <div className="col-md">
                  <div className="card-body">
                    <h5 className="fw-bold">{card.title}</h5>
                    <hr />
                    <p className="card-text">{card.description}</p>
                    <hr />
                    <Link to={card.pagePath}>Learn more</Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hr-line mt-5 mb-4"></div>
    </div>
  );
};

export default LottieCards;
