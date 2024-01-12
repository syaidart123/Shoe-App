import React from "react";
import { Card, Button } from "react-bootstrap";

const CardProduct = ({ product }) => {
  return (
    <Card>
      <Card.Img variant="top" src={product.url} />
      <Card.Body>
        <Card.Title>{product.name}</Card.Title>
        <Card.Text>{product.desc}</Card.Text>
        <Button variant="primary">Beli Sekarang</Button>
      </Card.Body>
    </Card>
  );
};

export default CardProduct;
