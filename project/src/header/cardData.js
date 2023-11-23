import WebLottieData from './lottie/Animation_Web.json';
import BigLottieData from './lottie/Animation_Big.json';
import MobileLottieData from './lottie/Animation_Mobile.json';
import VRLottieData from './lottie/Animation_VR.json';


const cardData = [
  {
    title: '웹 공학',
    lottieData: WebLottieData,
    description: '웹 프레임워크를 활용하여 front-end와 back-end 웹 개발자를 양성한다. 또한 클라우드 환경을 이해하고 웹 서비스를 구축 및 배포하는 지식을 습득한다.',
    pagePath: '/IntroWeb' // 웹 공학 페이지 경로

  },
  {
    title: '빅데이터',
    lottieData: BigLottieData,
    description: '빅 데이터 분석을 수행할 수 있는 데이터 사이언티스트 양성을 목표로 한다. 정형/비정형 데이터에 대한 수집, 모델링, 데이터 분석 전과정에 대한 전문지식을 습득한다.',
    pagePath: '/IntroBig' // 웹 공학 페이지 경로

  },
  {
    title: '모바일 소프트웨어',
    lottieData: MobileLottieData,
    description: '안드로이드, iOS 플랫폼을 활용한 모바일 응용 소프트웨어 개발자를 양성한다. 또한 다양한 센서와 무선 네트워크를 이용하여 IoT 애플리케이션을 개발한다.',
    pagePath: '/IntroMobile' // 웹 공학 페이지 경로

  },
  {
    title: '디지털 콘텐츠 및 가상현실',
    lottieData: VRLottieData,
    description: '디지털 영상처리, 디지털 콘텐츠 제작 및 활용 기술을 학습한다. 영상처리 및 컴퓨터 비전, 2D 이미지 및 3D 모델링, 게임, 가상현실 기술을 습득한다.',
    pagePath: '/IntroGraphic' // 웹 공학 페이지 경로

  },
];

export default cardData;