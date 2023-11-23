// IntroMain.js
import React from 'react';
import styles from './Intro.module.css'; // CSS 모듈 가져오기
import LottieCards from './LottieCards';

const IntroMain = () => {
  return (
    <div className={styles.introMain}> {/* CSS 모듈 클래스 사용 */}
      <div className={styles.circleTop}></div>
      <div className={styles.circleBottom}></div>
      <header className={styles.introHeader}> {/* 헤더에 스타일 적용 */}
        <div className={styles.headerContent}>
          <span>IT공과대학</span>
          <h1>학부소개</h1>
        </div>
      </header>
      <section className={styles.introSection}> {/* 섹션에 스타일 적용 */}
        {/* LottieCards 컴포넌트 추가 */}
        <LottieCards />
      </section>
    </div>
  );
};

export default IntroMain;
