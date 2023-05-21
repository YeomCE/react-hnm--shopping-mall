import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProductCard = ({item, setProductHover, setSearchValue, setToggleButton}) => {
    const navigate = useNavigate();

    const productEnterEvent=()=>{
        setProductHover(true)
        item.hover = true
    }
    const productLeaveEvent=()=>{
        setProductHover(false)
        item.hover = false
    }
    const showDetail = ()=>{
      navigate(`/product/${item.id}`)
      setToggleButton(false)
      setSearchValue('')
    }

  return (
    <div className='product-box' onClick={showDetail}>
        <img className='product-img'
            onMouseEnter={()=>{productEnterEvent()}}
            onMouseLeave={()=>{productLeaveEvent()}}
            src = {`${item?.hover ? item.imgHover : item.img}`}
            alt=''
             />
        {item?.choice === true ? <div className='choice'>Conscious choice</div> : ''}
        <div>{item?.title}</div>
        <div className='price'>{item?.price.toLocaleString()}원</div>
        {item?.new === true ? <div className='new'>New</div> : ''}
        
    </div>
  )
}

export default ProductCard