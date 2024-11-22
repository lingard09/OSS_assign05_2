import { Link } from "react-router-dom";

{books.map((book) => (
  <Row key={book.id}>
    <Col><Link to={`/detail/${book.id}`}>{book.title}</Link></Col>
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
