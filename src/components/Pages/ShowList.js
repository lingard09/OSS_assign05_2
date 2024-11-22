import "../component.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

const ShowList = () => {
  const initialBooks = [
    { id: "1", title: "female Generic Wagon", author: "Gustavo Ferry III", genre: "World", year: "1954-12-16", place: "Zambia" },
    { id: "2", title: "International Bedfordshire Bicycle", author: "Dolores Brown V", genre: "Blues", year: "1968-12-02", place: "Samoa" },
    { id: "3", title: "scalable pfft", author: "Melvin Nikolaus DDS", genre: "Electronic", year: "1957-03-07", place: "Bahrain" },
    { id: "4", title: "SUV orchid", author: "Kendra Larson", genre: "Blues", year: "1979-09-06", place: "Mexico" },
    { id: "5", title: "Willms", author: "Julie Jacobs Jr.", genre: "Electronic", year: "1973-06-13", place: "Puerto Rico" },
    { id: "6", title: "indigo", author: "Karl Abbott PhD", genre: "Folk", year: "1961-06-23", place: "Lao People's Democratic Republic" },
    { id: "7", title: "Johnston Account", author: "Pam Hilpert", genre: "Rock", year: "1953-02-16", place: "Cambodia" },
    { id: "8", title: "Southwest unleash", author: "Courtney Boyle", genre: "Stage And Screen", year: "1970-08-22", place: "Tajikistan" },
    { id: "9", title: "red", author: "Omar Gulgowski I", genre: "Pop", year: "2006-01-31", place: "Lithuania" },
    { id: "10", title: "Officer", author: "Tomas Dooley", genre: "Rock", year: "1993-12-04", place: "Pakistan" },
  ];

  const [books, setBooks] = useState(initialBooks);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showAddModal, setShowAddModal] = useState(false);
  const [editBook, setEditBook] = useState(null);
  const [newBook, setNewBook] = useState({
    id: "",
    title: "",
    author: "",
    genre: "",
    year: "",
    place: "",
  });

  // Edit Modal Handlers
  const handleEditClose = () => setShowEditModal(false);
  const handleEditShow = (book) => {
    setEditBook(book);
    setShowEditModal(true);
  };

  const handleEditSave = () => {
    const updatedBooks = books.map((book) =>
      book.id === editBook.id ? editBook : book
    );
    setBooks(updatedBooks);
    handleEditClose();
  };

  const handleEditChange = (e) => {
    const { name, value } = e.target;
    setEditBook({ ...editBook, [name]: value });
  };

  // Add Modal Handlers
  const handleAddClose = () => setShowAddModal(false);
  const handleAddShow = () => setShowAddModal(true);

  const handleAddSave = () => {
    setBooks([...books, { ...newBook, id: (books.length + 1).toString() }]);
    setNewBook({ id: "", title: "", author: "", genre: "", year: "", place: "" });
    handleAddClose();
  };

  const handleAddChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const delfunc = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      const newList = books.filter((book) => book.id !== id);
      setBooks(newList);
    }
  };

  return (
    <Container>
      {/* Add Button */}
      <Button variant="success" className="mb-3" onClick={handleAddShow}>
        Add Book
      </Button>

      {books.map((book) => (
        <Row key={book.id}>
          <Col>{book.id}</Col>
          <Col>{book.title}</Col>
          <Col>{book.author}</Col>
          <Col>{book.genre}</Col>
          <Col>{book.year}</Col>
          <Col>{book.place}</Col>

          <Col>
            <Button variant="primary" onClick={() => handleEditShow(book)}>
              Edit
            </Button>
            <Button variant="danger" onClick={() => delfunc(book.id)}>
              Delete
            </Button>
          </Col>
        </Row>
      ))}

      {/* Edit Modal */}
      <Modal show={showEditModal} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {editBook && (
            <Form>
              <Form.Group controlId="formTitle">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  name="title"
                  value={editBook.title}
                  onChange={handleEditChange}
                />
              </Form.Group>
              <Form.Group controlId="formAuthor">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  name="author"
                  value={editBook.author}
                  onChange={handleEditChange}
                />
              </Form.Group>
              <Form.Group controlId="formGenre">
                <Form.Label>Genre</Form.Label>
                <Form.Control
                  type="text"
                  name="genre"
                  value={editBook.genre}
                  onChange={handleEditChange}
                />
              </Form.Group>
              <Form.Group controlId="formYear">
                <Form.Label>Year</Form.Label>
                <Form.Control
                  type="text"
                  name="year"
                  value={editBook.year}
                  onChange={handleEditChange}
                />
              </Form.Group>
              <Form.Group controlId="formPlace">
                <Form.Label>Place</Form.Label>
                <Form.Control
                  type="text"
                  name="place"
                  value={editBook.place}
                  onChange={handleEditChange}
                />
              </Form.Group>
            </Form>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleEditSave}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Add Modal */}
      <Modal show={showAddModal} onHide={handleAddClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add New Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="formTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                name="title"
                value={newBook.title}
                onChange={handleAddChange}
              />
            </Form.Group>
            <Form.Group controlId="formAuthor">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                name="author"
                value={newBook.author}
                onChange={handleAddChange}
              />
            </Form.Group>
            <Form.Group controlId="formGenre">
              <Form.Label>Genre</Form.Label>
              <Form.Control
                type="text"
                name="genre"
                value={newBook.genre}
                onChange={handleAddChange}
              />
            </Form.Group>
            <Form.Group controlId="formYear">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="text"
                name="year"
                value={newBook.year}
                onChange={handleAddChange}
              />
            </Form.Group>
            <Form.Group controlId="formPlace">
              <Form.Label>Place</Form.Label>
              <Form.Control
                type="text"
                name="place"
                value={newBook.place}
                onChange={handleAddChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleAddClose}>
            Close
          </Button>
          <Button variant="success" onClick={handleAddSave}>
            Add Book
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default ShowList;
