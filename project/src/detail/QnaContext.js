import React, { createContext, useState } from 'react';
import faker from 'faker';

export const QnaContext = createContext();

export const QnaProvider = ({ children }) => {
  const createFakeQnas = () => {
    return Array.from({ length: 100 }).map((_, i) => ({
      id: 100 - i,
      title: `Qna 제목 ${100 - i}`,
      author: faker.name.lastName(), 
      password : '1234',
      date: faker.date.past(2).toISOString().split('T')[0],
      views: faker.random.number({ min: 1, max: 1000 }),
      content: faker.lorem.paragraphs(),
    }));
  };
  const [qnas, setQnas] = useState(createFakeQnas()); 

  const addNotice = (newQna) => {
    setQnas([newQna, ...qnas]);
  };

  return (
    <QnaContext.Provider value={{ qnas, setQnas }}>
      {children}
    </QnaContext.Provider>
  );
};
