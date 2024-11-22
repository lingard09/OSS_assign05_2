import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import ShowList from './components/pages/ShowList';
import Detail from './components/pages/Detail';
import Update from './components/pages/Update';
import NotFound from './components/pages/NotFound';
import reportWebVitals from './reportWebVitals';

const App = () => {
  // 상태로 책 목록 관리
  const [books, setBooks] = useState([
    { id: 1, title: 'female Generic Wagon', author: 'Gustavo Ferry III', genre: 'World', date: '1954-12-16', location: 'Zambia' },
    { id: 2, title: 'International Bedfordshire Bicycle', author: 'Dolores Brown V', genre: 'Blues', date: '1968-12-02', location: 'Samoa' },
    { id: 3, title: 'scalable pfft', author: 'Melvin Nikolaus DDS', genre: 'Electronic', date: '1957-03-07', location: 'Bahrain' },
    { id: 4, title: 'SUV orchid', author: 'Kendra Larson', genre: 'Blues', date: '1979-09-06', location: 'Mexico' },
    { id: 5, title: 'Willms', author: 'Julie Jacobs Jr.', genre: 'Electronic', date: '1973-06-13', location: 'Puerto Rico' },
  ]);

  return (
    <div className="App">
      <h1 className="header">Book Management System</h1>
      <BrowserRouter>
        <Routes>
          {/* 각 페이지에 books와 setBooks 전달 */}
          <Route path="/" element={<ShowList books={books} setBooks={setBooks} />} />
          <Route path="/list" element={<ShowList books={books} setBooks={setBooks} />} />
          <Route path="/detail/:id" element={<Detail books={books} />} />
          <Route path="/update/:id" element={<Update books={books} setBooks={setBooks} />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
