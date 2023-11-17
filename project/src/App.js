// App.js
import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; // Routes 추가
import Main from './Main';
import Community from './header/Community';
import Qna from './header/Qna';
import Notice from './header/Notice';
import Student_Notice from './sidebar/Student_Notice';
import Somoim from './sidebar/Somoim';
import Content from './detail/Content';
import Edit from './detail/Edit';



function App() {
  return (
    <Router>
      <div>
        

        {/* Routes 요소로 감싸서 라우트 정의 */}
        <Routes>
          <Route path="/Main" element={<Main />} /> {/* element 속성으로 컴포넌트 지정 */}
          <Route path="/Community" element={<Community />} /> {/* element 속성으로 컴포넌트 지정 */}
          <Route path="/Qna" element={<Qna />} /> {/* element 속성으로 컴포넌트 지정 */}
          <Route path="/Somoim" element={<Somoim />} /> {/* element 속성으로 컴포넌트 지정 */}
          <Route path="/Notice" element={<Notice />} /> {/* element 속성으로 컴포넌트 지정 */}
          <Route path="/Student_Notice" element={<Student_Notice />} /> {/* element 속성으로 컴포넌트 지정 */}
          <Route path="/Content" element={<Content />} /> {/* element 속성으로 컴포넌트 지정 */}
          <Route path="/Edit" element={<Edit />} /> {/* element 속성으로 컴포넌트 지정 */}


        </Routes>
      </div>
    </Router>
  );
}

export default App;
