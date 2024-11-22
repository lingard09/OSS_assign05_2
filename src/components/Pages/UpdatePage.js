import React, { useState } from "react";

const UpdatePage = () => {
  const [book, setBook] = useState({
    title: "",
    author: "",
    genre: "",
    year: "",
    place: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBook({ ...book, [name]: value });
  };

  const handleSave = () => {
    // 수정된 데이터를 저장 처리
    console.log("Updated book:", book);
  };

  return (
    <div>
      <h2>Update Book</h2>
      <form>
        <input name="title" value={book.title} onChange={handleChange} placeholder="Title" />
        <input name="author" value={book.author} onChange={handleChange} placeholder="Author" />
        <input name="genre" value={book.genre} onChange={handleChange} placeholder="Genre" />
        <input name="year" value={book.year} onChange={handleChange} placeholder="Year" />
        <input name="place" value={book.place} onChange={handleChange} placeholder="Place" />
        <button type="button" onClick={handleSave}>Save</button>
      </form>
    </div>
  );
};

export default UpdatePage;
