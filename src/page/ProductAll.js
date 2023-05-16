import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import { Col, Container, Row } from 'react-bootstrap';

const ProductAll = () => {

  const [productList, setProductList] = useState([]);
  const [productHover, setProductHover] = useState(false);

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = async () => {
    let url = `http://localhost:5000/products`
    let response = await fetch(url)
    let data = await response.json()
    setProductList(data)
  };

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu) => (
            <Col lg={3}>
              <ProductCard item={menu} setProductHover={setProductHover} productHover={productHover} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll