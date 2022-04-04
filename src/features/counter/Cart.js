import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../Navbar";
import { Card , Button } from "react-bootstrap";
import { subCart, cartDetail, getTotals, removeItem } from "./ProductSlice";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const navigate = useNavigate();
  const productItem = useSelector((state) => state.product.cart);
  const Total = useSelector((state) => state.product.total);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTotals());
  }, [productItem]);

  const handle_Sub_Quantity = (detail) => {
    dispatch(subCart(detail));
  };

  const handle_Add_Quantity = (detail) => {
    dispatch(cartDetail(detail));
  };

  const Remove = (detail) => {
    dispatch(removeItem(detail));
  };
  return (
    <div>
      <Navbar /> <br />
      <h2> Cart Detail </h2> <br /> 
      <Button onClick={() => navigate("/")}> Back </Button>
        <hr />
      <div className="product">
        {productItem.map((detail) => {
          return (
            <>
              <div key={detail.id}>
                <Card style={{ width: "18rem" }}>
                  <img src={detail.image} style = {{width : "100%" , height :"300px"}}/>
                  <Card.Body>
                    <Card.Title> {detail.title}</Card.Title>
                    <Card.Text>
                      <p> {detail.description} </p>
                      <h4> Rs. {detail.price}</h4>
                      <Button onClick={() => handle_Add_Quantity(detail)}>
                        {" "}
                        +{" "}
                      </Button>
                      <p> {detail.cartqty} </p>
                      <Button onClick={() => handle_Sub_Quantity(detail)}>
                        {" "}
                        -{" "}
                      </Button>{" "}
                      <br />
                      <h2> Total : {detail.price * detail.cartqty} </h2>
                      <Button onClick={() => Remove(detail)}>Remove</Button>
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </>
          );
        })}
        <div>
          
        </div> 
      </div> <hr />
      <h2> SubTotal : {Total} </h2>
    </div>
  );
};

export default Cart;
