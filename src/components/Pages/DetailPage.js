import React from "react";
import { useParams } from "react-router-dom";

const DetailPage = () => {
  const { id } = useParams();

  // 실제 데이터는 API나 전역 상태를 활용
  const books = [
    { id: "1", title: "female Generic Wagon", author: "Gustavo Ferry III", genre: "World", year: "1954-12-16", place: "Zambia" },
    // ...
  ];
  const book = books.find((book) => book.id === id);

  if (!book) {
    return <p>Book not found!</p>;
  }

  return (
    <div>
      <h2>{book.title}</h2>
      <p><strong>Author:</strong> {book.author}</p>
      <p><strong>Genre:</strong> {book.genre}</p>
      <p><strong>Year:</strong> {book.year}</p>
      <p><strong>Place:</strong> {book.place}</p>
    </div>
  );
};

export default DetailPage;
