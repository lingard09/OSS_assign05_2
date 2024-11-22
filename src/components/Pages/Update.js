import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Update = ({ books, setBooks }) => {
  const { id } = useParams(); // URL에서 책 ID를 가져옴
  const navigate = useNavigate();

  // 책의 초기 상태를 설정
  const [book, setBook] = useState({
    title: '',
    author: '',
    genre: '',
    date: '',
    location: '',
  });

  // 데이터 로드: id를 기반으로 책 데이터를 가져오기
  useEffect(() => {
    const bookToEdit = books.find((b) => b.id === parseInt(id)); // books 배열에서 id로 책 찾기
    if (bookToEdit) {
      setBook(bookToEdit); // 찾은 책 데이터를 상태로 설정
    } else {
      alert('책을 찾을 수 없습니다.');
      navigate('/'); // 책을 찾지 못하면 메인 페이지로 이동
    }
  }, [id, books, navigate]);

  // 입력 값 변경 핸들러
  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // 저장 버튼 클릭 핸들러
  const handleSave = () => {
    // books 배열을 업데이트
    const updatedBooks = books.map((b) =>
      b.id === parseInt(id) ? { ...book } : b
    );
    setBooks(updatedBooks); // 부모 컴포넌트의 상태를 업데이트

    // 저장 후 메인 페이지로 이동
    navigate('/');
  };

  return (
    <div>
      <h1>Edit Book</h1>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <label>
            Title:
            <input
              type="text"
              name="title"
              value={book.title}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Author:
            <input
              type="text"
              name="author"
              value={book.author}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Genre:
            <input
              type="text"
              name="genre"
              value={book.genre}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Date:
            <input
              type="date"
              name="date"
              value={book.date}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label>
            Location:
            <input
              type="text"
              name="location"
              value={book.location}
              onChange={handleChange}
            />
          </label>
        </div>
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default Update;
