// import React from 'react'
// import {useState } from "react";
// import generateUniqueId from "generate-unique-id";
import { Navbar,Container} from "react-bootstrap";
// import { useDispatch} from "react-redux";
// import { addBookAsync } from "../Services/Action/Bookaction";
// import { useNavigate } from "react-router";

function Header(background) {
  // const [show, setShow] = useState(false);

  // const handleClose = () => setShow(false);
  // const handleShow = () => setShow(true);
  // // const{error,isCreated} =useSelector((state)=>state.ProductsReduces)
  // const navigate = useNavigate();
  // const dispatch =useDispatch();
  // const [errors, setErrors] = useState({});
  // const [imageUrl, setImageUrl] = useState('');
  // const [productinput, setProductInput] = useState({
  //   title: "",  
  //   description: "",
  //   category: "",
  //   price: "",
  // });

  // const validateField = (name, value) => {
  //   let error = "";
  //   switch (name) {
  //     case "title":
  //       if (!value) error = "* Title is required";
  //       break;
  //     case "price":
  //       if (!value) {
  //         error = "* Price is required";
  //       } else if (isNaN(value)) {
  //         error = "* Price must be a valid number";
  //       } else if (parseFloat(value) <= 0) {
  //         error = "* Price must be greater than zero";
  //       }
         
  //       break;
  //     case "category":
  //       if (!value) error = "*category  is required";
  //       break;
  //     case "description":
  //       if (!value) {
  //         error = "* Description is required";
  //       } else if (value.length < 20) {
  //         error = "* Description must be at least 20 characters long";
  //       }
  //       break;
  //       case "img":
  //         if (!value) error = "* Image URL is required";
  //         break;
  //     default:
  //       break;
  //   }
  //   return error;
  // };

  // const handleImageUrlChange = (e) => {
  //   setImageUrl(e.target.value);
  // };
  // const handelChanged = (e) => {
  //   const { name, value } = e.target;
  //   setProductInput({
  //     ...productinput,
  //     [name]: value,
  //   });
  // };

  // const handelSubmit = (e) => {
  //   e.preventDefault();
  //   // console.log("Submit now", productinput);
  //   const newErrors = {};
  //   Object.keys(productinput).forEach((field) => {
  //     const error = validateField(field, productinput[field]);
  //     if (error) {
  //       newErrors[field] = error;
  //     }
  //   });
  //   const imgError = validateField('img', imageUrl);
  //   if (imgError) {
  //     newErrors.img = imgError;
  //   }

  //   if (Object.keys(newErrors).length > 0) {
  //     setErrors(newErrors);
  //     return;
  //   }
  //   let id = generateUniqueId({
  //     length: 5,
  //     useLetters: false,
  //   });
  //   console.log("Submitting product:", { ...productinput, imageUrl }); 
  //   dispatch(addBookAsync({ ...productinput,  id: id.toString(),imageUrl }));
  //   console.log(productinput)
  // };

  // useEffect(()=> {
  //   if(isCreated){
  //     navigate("/")
  //     console.log(isCreated)
  //   }
  // }, [isCreated, navigate])
  return (
      <>
         <div className="mainNavbar">
              <div className="header" style={{ backgroundColor: background }}>
                  <Container>
                    <Navbar className="justify-content-between w-100 align-items-center p-0" expand="lg">
                      <Navbar.Brand href="/" className="fs-1 fw-bold">Library</Navbar.Brand>
                      <nav >
                        <ul className="d-flex justify-content-center m-0">
                          <li><a href="/" className="p-0 fw-semibold fs-5">Home</a></li>


                          <li className="ps-5">
                            <div className="nav-item">
                              <div className="category-hover d-flex align-items-center">
                              <a href="/AddBook" className="fs-5 fw-semibold ">
                                AddBook
                              </a>
                              </div>
                            </div>
                          </li>
                          
                        </ul>
                      </nav>
                    </Navbar>
                 </Container>
              </div>
          </div>
          {/* <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title className="fs-3 fw-bold ps-5" style={{color:'#7E5332'}}>Add Book</Modal.Title>
        </Modal.Header>
        <Modal.Body className="rounded-bottom">
            <div className='Addproducts'>
              <Container>
                <Form onSubmit={handelSubmit}>
                  <Form.Group className="mb-4 p-0">
                    <Row className="p-0">
                    <Form.Label column sm="3" style={{color:'#E5E5EF'}}>
                      Book Title :-
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        type="text"
                        placeholder="Enter Book Title"
                        name="title"
                        value={productinput.title}
                        onChange={handelChanged}
                        width={"50px"}
                        />
                    </Col>
                        {errors.title && <i style={{ color: "red" }}>{errors.title}</i>}
                  </Row>
                  </Form.Group>
                  <Form.Group as={Row} className="mb-4 d-flex justify-content-center align-items-center">
                    <Form.Label column sm="3" style={{color:'#E5E5EF'}}>
                      Book Description :-
                    </Form.Label>
                    <Col sm="9">
                    <Form.Control
                            as="textarea"
                            name="description"
                            rows="5"
                            placeholder="Write your description here..."
                            className="mb-3"
                            // spellCheck="true"
                            value={productinput.description}
                            onChange={handelChanged}
                          />
                    </Col>
                    {errors.description && <i style={{ color: "red" }}>{errors.description}</i>}
                  </Form.Group>
                  <Form.Group as={Row} className="mb-4 d-flex justify-content-center align-items-center">
                    <Form.Label column sm="3" style={{color:'#E5E5EF'}}>
                      BookCategory:-
                    </Form.Label>
                    <Col sm="9">
                        <Form.Select
                          aria-label="Category"
                          className="border-bottom border-0"
                          onChange={handelChanged}
                          name="category"
                          // onBlur={() => setErrors({ ...errors, priority: validateField("priority", noteInput.priority) })}
                        >
                          <option>Select Category</option>
                          <option value="food">Food</option>
                          <option value="electronics">Electronics</option>
                          <option value="grocery">Grocery</option>
                          <option value="beauty">Personal Care and Beauty </option>
                        </Form.Select>
                    </Col>
                    {errors.category && <i style={{ color: "red" }}>{errors.category}</i>}
                  </Form.Group>
                  <Form.Group as={Row} className="mb-4">
                    <Form.Label column sm="3" style={{color:'#E5E5EF'}}>
                      Book Price :-
                    </Form.Label>
                    <Col sm="9">
                      <Form.Control
                        type="number"
                        placeholder="Enter Book Price"
                        name="price"
                        value={productinput.price}
                        onChange={handelChanged}
                        width={"50px"}
                      />
                    </Col>
                    {errors.price && <i style={{ color: "red" }}>{errors.price}</i>}
                  </Form.Group>
                  <Form.Group as={Row} className="mb-4 d-flex justify-content-center align-items-center">
                    <Form.Label column sm="3" style={{color:'#E5E5EF'}}>
                      ImageUrl :-
                    </Form.Label>
                    <Col sm="9">
                    <Form.Control
                            type="url"
                            name='img'
                            placeholder="Paste an image URL"
                            value={imageUrl}
                            onChange={handleImageUrlChange}
                          />
                    </Col>
                    {errors.img && <i style={{ color: "red" }}>{errors.img}</i>}
                  </Form.Group>
                  <Form.Group as={Row}>
                    <Col sm={12} className="d-flex justify-content-center">
                      <button type="submit" className='text-center'>Add Product</button>
                    </Col>
                  </Form.Group>
                </Form>
              </Container>
            </div>
      </Modal.Body>
         </Modal> */}
      </>
  )
}

export default Header
