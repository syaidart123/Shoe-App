import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CardProduct from "./card";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../api/axios.js";

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  let Navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/product")
      .then((res) => {
        const {
          data: { data },
        } = res;
        setProducts([...data]);
      })
      .catch((err) => console.log(`[fatch data] : ${err}`));
  }, []);

  return (
    <Container>
      <Row>
        <Col>
          <h1 className="text-center fw-bold">Produk Terbaru</h1>
          <p className="text-center">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          </p>
        </Col>
      </Row>
      <Row>
        {products.map((product) => {
          return <CardProduct product={product} key={product._id} />;
        })}
      </Row>
      <Row>
        <Col className="text-center">
          <Button
            className="btn btn-success rounded-5 btn-lg"
            onClick={() => Navigate("/kelas")}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            Lihat Semua Kelas <i className="fa-solid fa-chevron-right ms-1"></i>
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductSection;
