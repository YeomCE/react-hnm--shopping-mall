import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetail = () => {

  const [ProductDetail, setProductDetail] = useState();
  let { id } = useParams();

  const getProductDetail = async () => {
    let url = `http://localhost:5000/products/${id}`
    let response = await fetch(url)
    let data = await response.json()
    setProductDetail(data)
    console.log(data.size)
  }
  useEffect(() => {
    getProductDetail();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  return (
    <div>
      <div className='detail-box'>
        <img src={ProductDetail?.imgHover} alt=''/>
        <div className='product-info'>
          <div className='detail-title'>{ProductDetail?.title}</div>          
          <div className='new'>New</div>
          <div>{ProductDetail?.price.toLocaleString()}원</div>
          {ProductDetail?.choice === true ? <div className='choice'>Conscious choice</div> : ''}
          <select>
            <option disabled selected>size</option>
            {ProductDetail?.size.length > 0 &&
              ProductDetail.size.map((item) => {
                return <option key={item}>{item}</option>
              })}
          </select>
          <button>추가</button>
        </div>
      </div>
    </div>
  )
}

export default ProductDetail