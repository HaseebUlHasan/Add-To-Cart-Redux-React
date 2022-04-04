import React, { useState } from "react";
import { Modal, Button, Card } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { addDetail , cartDetail } from "./ProductSlice";
import { useNavigate } from "react-router-dom";
import Navbar from "../../Navbar";

export function Product() {

  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState();
  const [description, setDescription] = useState("");
  const [image , setImage] = useState("");

  
  const Data = {
    image : image,
    title: title,
    price: price,
    description: description,
    id: Math.floor(Math.random() * 100),
  };
  const productDetail = useSelector((state) => state.product.item);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  const handleChange = () => {
    dispatch(addDetail(Data));
    setImage("")
    setTitle("");
    setPrice("");
    setDescription("");
    setShow(false);
  };

   const AddToCart = (detail) =>{
     dispatch(cartDetail(detail));
   }
 
  return (
    <div>  
      <Navbar />
      <br />
      <>
        <Button variant="primary" onClick={handleShow}>
          Create Post
        </Button>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title> Post Detail </Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <label> Image Url : </label>{" "}
            <input
              type="text"
              value={image }
              onChange={(e) => setImage(e.target.value)}
            />{" "}
            <br />
            <br />
            <label> Title : </label>{" "}
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />{" "}
            <br />
            <br />
            <label> Price : </label>{" "}
            <input
              type="text"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <br />
            <br />
            <label> Description : </label>{" "}
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <br />
            <br />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => handleChange()}>
              Post
            </Button>
          </Modal.Footer>
        </Modal>
      </> <br /> <br /> <br />
        <div className = "product">
      {productDetail.map((detail) => {
        return (
          <div key = {detail.id}>
            <Card style={{ width: "12rem" }}>
              <img src={detail.image} style = {{width : "100%" , height :"250px"}}/>
              <Card.Body>
                <Card.Title> {detail.title}</Card.Title>
                <Card.Text>
                <p>  {detail.description} </p>
                  <h4> Rs. {detail.price}</h4>
                </Card.Text>
                <Button variant="primary" onClick={() => AddToCart(detail)}> 
                Add to Cart 
                </Button>
                <Button variant="primary" onClick = {() => navigate("/info" , {state : {title : detail.title , image : detail.image ,
                  description : detail.description , price : detail.price}})}> 
                    More Information 
                </Button>
              </Card.Body>
            </Card>
          </div>
        );
      })}
      </div>
    </div>
  );
}
