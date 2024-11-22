import React, { useState } from "react";
import { Link } from "react-router-dom";

const ShowList = () => {
  // 초기 데이터: 책 목록 (샘플 데이터)
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "female Generic Wagon",
      author: "Gustavo Ferry III",
      genre: "World",
      date: "1954-12-16",
      location: "Zambia",
    },
    {
      id: 2,
      title: "International Bedfordshire Bicycle",
      author: "Dolores Brown V",
      genre: "Blues",
      date: "1968-12-02",
      location: "Samoa",
    },
    {
      id: 3,
      title: "scalable pfft",
      author: "Melvin Nikolaus DDS",
      genre: "Electronic",
      date: "1957-03-07",
      location: "Bahrain",
    },
    {
      id: 4,
      title: "SUV orchid",
      author: "Kendra Larson",
      genre: "Blues",
      date: "1979-09-06",
      location: "Mexico",
    },
    {
      id: 5,
      title: "Willms",
      author: "Julie Jacobs Jr.",
      genre: "Electronic",
      date: "1973-06-13",
      location: "Puerto Rico",
    },
    {
      id: 6,
      title: "indigo",
      author: "Karl Abbott PhD",
      genre: "Folk",
      date: "1961-06-23",
      location: "Lao People's Democratic Republic",
    },
    {
      id: 7,
      title: "Johnston Account",
      author: "Pam Hilpert",
      genre: "Rock",
      date: "1953-02-16",
      location: "Cambodia",
    },
    {
      id: 8,
      title: "Southwest unleash",
      author: "Courtney Boyle",
      genre: "Stage And Screen",
      date: "1970-08-22",
      location: "Tajikistan",
    },
    {
      id: 9,
      title: "red",
      author: "Omar Gulgowski I",
      genre: "Pop",
      date: "2006-01-31",
      location: "Lithuania",
    },
    {
      id: 10,
      title: "Officer",
      author: "Tomas Dooley",
      genre: "Rock",
      date: "1993-12-04",
      location: "Pakistan",
    },
  ]);

  // 책 삭제 함수
  const handleDelete = (id) => {
    if (window.confirm("정말로 이 책을 삭제하시겠습니까?")) {
      setBooks(books.filter((book) => book.id !== id)); // 해당 책을 제외한 나머지 목록으로 상태 업데이트
      console.log(`Book with ID ${id} deleted`);
    }
  };

  return (
    <div>
      <table border="1" style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Genre</th>
            <th>Date</th>
            <th>Location</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>
                <Link to={`/detail/${book.id}`}>{book.title}</Link>
              </td>
              <td>{book.author}</td>
              <td>{book.genre}</td>
              <td>{book.date}</td>
              <td>{book.location}</td>
              <td>
                <Link to={`/update/${book.id}`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => handleDelete(book.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ShowList;
