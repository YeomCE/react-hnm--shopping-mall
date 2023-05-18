import React, { useEffect, useState } from 'react'
import ProductCard from '../component/ProductCard';
import SearchValueNull from '../component/SearchValueNull';
import { Col, Container, Row } from 'react-bootstrap';
import { useSearchParams } from 'react-router-dom';
import { ClipLoader } from "react-spinners";

const ProductAll = ({ searchValueEnter, setSearchValue, loading, setLoading }) => {

  const [productHover, setProductHover] = useState(false);
  const [productList, setProductList] = useState([]);
  const [query, setQuery] = useSearchParams();

  const override = {
    display: "flex",
    margin: "50px auto",
    textAlign: "center"
  };

  const getProducts = async () => {
    setLoading(true)
    let searchQuery = query.get('q') || ''
    let url = `http://localhost:5000/products?q=${searchQuery}`
    let response = await fetch(url)
    let data = await response.json()
    setProductList(data)
    setLoading(false)
  };

  useEffect(() => {
    getProducts();
  }, [query])

  return (
    <div>
      {loading ? <ClipLoader color='#cd0118' cssOverride={override} size={150} />
        :
        searchValueEnter !== '' && productList.length === 0 ? <SearchValueNull />
        :
        <Container>
          <Row>
            {productList.map((menu) => (
              <Col lg={3}>
                <ProductCard key={menu} item={menu} setProductHover={setProductHover} productHover={productHover} setSearchValue={setSearchValue} />
              </Col>
            ))}
          </Row>
        </Container>
      }

    </div>
  )
}

export default ProductAll