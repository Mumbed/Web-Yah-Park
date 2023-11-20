import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Routes 추가
import Main from './Main';

import Community from './header/Community';
import Qna from './header/Qna';
import Notice from './header/Notice';
import Professor from './header/Professor';
import IntroMain from './header/IntroMain';
import Login from './header/Login';


import IntroBig from './sidebar/IntroBig';
import IntroGraphic from './sidebar/IntroGraphic';
import IntroMobile from './sidebar/IntroMobile';
import IntroWeb from './sidebar/IntroWeb';


import Student_Notice from './sidebar/Student_Notice';
import Somoim from './sidebar/Somoim';
import Content from './detail/Content';
import Edit from './detail/Edit';
import Write from './detail/Write';
import { NoticeProvider } from './detail/NoticeContext'; // NoticeContext를 import합니다.

function App() {
  return (
    <NoticeProvider> {/* NoticeProvider로 전체 라우트를 감싸줍니다 */}

    <Router>
      <div>
        {/* Routes 요소로 감싸서 라우트 정의 */}
        <Routes>
          <Route path="/" element={<Main />} /> {/* element 속성으로 컴포넌트 지정 */}
          <Route path="/Main" element={<Main />} /> {/* element 속성으로 컴포넌트 지정 */}
          <Route path="/Community" element={<Community />} /> {/* element 속성으로 컴포넌트 지정 */}
          <Route path="/Qna" element={<Qna />} /> {/* element 속성으로 컴포넌트 지정 */}
          <Route path="/Somoim" element={<Somoim />} /> {/* element 속성으로 컴포넌트 지정 */}
          <Route path="/Notice" element={<Notice />} /> {/* element 속성으로 컴포넌트 지정 */}
          <Route path="/Student_Notice" element={<Student_Notice />} /> {/* element 속성으로 컴포넌트 지정 */}
        <Route path="/Content/:id" element={<Content />} />
          <Route path="/Edit" element={<Edit />} /> {/* element 속성으로 컴포넌트 지정 */}
          <Route path="/Professor" element={<Professor />} /> {/* element 속성으로 컴포넌트 지정 */}
          <Route path="/Write" element={<Write />} /> {/* element 속성으로 컴포넌트 지정 */}
          <Route path="/Login" element={<Login />} /> {/* element 속성으로 컴포넌트 지정 */}

          <Route path="/IntroMain" element={<IntroMain />} /> {/* element 속성으로 컴포넌트 지정 */}
          <Route path="/IntroGraphic" element={<IntroGraphic />} /> {/* element 속성으로 컴포넌트 지정 */}
          <Route path="/IntroBig" element={<IntroBig />} /> {/* element 속성으로 컴포넌트 지정 */}
          <Route path="/IntroWeb" element={<IntroWeb />} /> {/* element 속성으로 컴포넌트 지정 */}
          <Route path="/IntroMobile" element={<IntroMobile />} /> {/* element 속성으로 컴포넌트 지정 */}
        </Routes>
      </div>
    </Router>
    </NoticeProvider>

  );
}

export default App;