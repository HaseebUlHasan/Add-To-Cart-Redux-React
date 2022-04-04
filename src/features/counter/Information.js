import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Card ,Button } from "react-bootstrap";
import Navbar from "../../Navbar";

const Information = () => {
  const { state } = useLocation();
  const navigate = useNavigate();

  return (
    <div>
      <Navbar />
      <br />
      <Button onClick={() => navigate("/")}>Back</Button> <br />
      <div className="cart">
        <Card style={{ width: "18rem" }}>
          <img src={state.image} />
          <Card.Body>
            <Card.Title> {state.title}</Card.Title>
            <Card.Text>
              <p> {state.description} </p>
              <h4> Rs. {state.price}</h4>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default Information;
