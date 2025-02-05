// import React from 'react'

import { Button, Card, Container } from "react-bootstrap"
import { useDispatch, useSelector } from "react-redux"
import { deleteBookAsync, getAllBooksAsync } from "../Services/Action/Bookaction";
import { useEffect } from "react";
import { useNavigate } from "react-router";


function Home() {
  const dispatch =useDispatch();
  const navigate =useNavigate();
  const handleDelete = (id) => {
    dispatch(deleteBookAsync(id));
  };

  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };
  useEffect(() => {
    dispatch(getAllBooksAsync());
  }, []);
  const {books} =useSelector((state)=>state.BookReduces)
  return (
    <div>
      <div className="banner">
       <Container>
       <div className="d-flex flex-wrap gap-3">
            {books.map((book) => (
              <Card className="border-0 my-5" key={book.id} style={{ width: '18rem' }} >
                <Card.Img src={book.imageUrl} width={100} height={200} />
                <Card.Body className="text-start">
                  <h2>{book.title}</h2>
                  <Card.Text>{book.author}</Card.Text>
                  <span className="category">{book.category}</span>
                  <Card.Text className="pt-3">{book.date}</Card.Text>
                  <Card.Text> ${book.price}</Card.Text>
                  <Card.Text>{book.page}</Card.Text>
                  <Card.Text>{book.description}</Card.Text>
                  <div className="text-center">
                    <Button className="me-3" onClick={() => handleEdit(book.id)}>Edit</Button>
                    <button onClick={() => handleDelete(book.id)}>Delete</button>
                  </div>
                </Card.Body>
              </Card>
            ))}
          </div>
       </Container>
      </div>
    </div>
  )
}

export default Home
