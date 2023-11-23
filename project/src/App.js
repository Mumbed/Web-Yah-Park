import React from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom'; 
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
import NoticeContent from './detail/NoticeContent';
import QnaContent from './detail/QnaContent';

import EditNotice from './detail/EditNotice';
import EditQna from './detail/EditQna';

import NoticeWrite from './detail/NoticeWrite';
import QnaWrite from './detail/QnaWrite';
import Community_Content from './detail/Community_Content';
import Somoim_Content from './detail/Somoim_Content';

import TagInput from './header/notice_filter/TagInput';
import ExampleList from './header/notice_filter/ExampleList';
import projects from './header/notice_filter/projects';

import { NoticeProvider } from './detail/NoticeContext';
import { QnaProvider } from './detail/QnaContext'; 

function App() {
  return (
    <NoticeProvider> 
      <QnaProvider> 

        <Router>
          <div>
            <Routes>
              <Route path="/" element={<Main />} /> 
              <Route path="/Main" element={<Main />} /> 
              <Route path="/Community" element={<Community />} /> 
              <Route path="/Qna" element={<Qna />} /> 
              <Route path="/Somoim" element={<Somoim />} /> 
              <Route path="/Notice" element={<Notice />} /> 
              <Route path="/Student_Notice" element={<Student_Notice />} /> 
              <Route path="/NoticeContent/:id" element={<NoticeContent />} />
              <Route path="/QnaContent/:id" element={<QnaContent />} />

              <Route path="/EditNotice/:id" element={<EditNotice />} />
              <Route path="/EditQna/:id" element={<EditQna />} />

              <Route path="/Professor" element={<Professor />} /> 
              <Route path="/NoticeWrite" element={<NoticeWrite />} /> 
              <Route path="/QnaWrite" element={<QnaWrite />} /> 

              <Route path="/Login" element={<Login />} /> 

              <Route path="/IntroMain" element={<IntroMain />} /> 
              <Route path="/IntroGraphic" element={<IntroGraphic />} /> 
              <Route path="/IntroBig" element={<IntroBig />} /> 
              <Route path="/IntroWeb" element={<IntroWeb />} /> 
              <Route path="/IntroMobile" element={<IntroMobile />} /> 

              <Route path="/Community_Content/:id" element={<Community_Content />} />
              <Route path="/Somoim_Content/:id" element={<Somoim_Content/>} />

            </Routes>
          </div>
        </Router>
      </QnaProvider>

    </NoticeProvider>

  );
}

export default App;