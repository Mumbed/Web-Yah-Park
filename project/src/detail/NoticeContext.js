import React, { createContext, useState } from 'react';
import faker from 'faker';

export const NoticeContext = createContext();

export const NoticeProvider = ({ children }) => {
  const createFakeNotices = () => {
    return Array.from({ length: 100 }).map((_, i) => ({
      id: 100 - i ,
      title: `공지사항 제목 ${100 - i}`,
      author: faker.name.lastName(), 
      date: faker.date.past(2).toISOString().split('T')[0],
      views: faker.random.number({ min: 1, max: 1000 }),
      content: faker.lorem.paragraphs(),
      category: faker.random.arrayElement(['중요', '취업', '비교과', '캡스톤'])
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
