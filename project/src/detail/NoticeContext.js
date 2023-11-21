import React, { createContext, useState } from 'react';
import faker from 'faker';

export const NoticeContext = createContext();

export const NoticeProvider = ({ children }) => {
  // 임시 공지사항 데이터를 생성합니다.
  const createFakeNotices = () => {
    return Array.from({ length: 100 }).map((_, i) => ({
      id: 100 - i ,
      title: `공지사항 제목 ${100 - i}`,
      author: faker.name.lastName(), // 성(last name)만 생성
      password : '1234',
      date: faker.date.past(2).toISOString().split('T')[0],
      views: faker.random.number({ min: 1, max: 1000 }),
      content: faker.lorem.paragraphs(),
    }));
  };
  const [notices, setNotices] = useState(createFakeNotices());

  const addNotice = (newNotice) => {
    setNotices([newNotice, ...notices]);
  };

  return (
    <NoticeContext.Provider value={{ notices, setNotices }}>
      {children}
    </NoticeContext.Provider>
  );
};
