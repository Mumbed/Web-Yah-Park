import React, { createContext, useState } from 'react';
import faker from 'faker';

export const NoticeContext = createContext();

export const NoticeProvider = ({ children }) => {
  // 임시 공지사항 데이터를 생성합니다.
  const createFakeNotices = () => {
    return Array.from({ length: 100 }).map((_, i) => ({
      id: i + 1,
      title: `공지사항 제목 ${i + 1}`,
      author: faker.name.findName(),
      date: faker.date.past(2).toISOString().split('T')[0],
      views: faker.random.number({ min: 1, max: 1000 }),
      content: faker.lorem.paragraphs(),
    }));
  };

  const [notices, setNotices] = useState(createFakeNotices()); // 공지사항 데이터를 초기화합니다.

  return (
    <NoticeContext.Provider value={{ notices, setNotices }}>
      {children}
    </NoticeContext.Provider>
  );
};
