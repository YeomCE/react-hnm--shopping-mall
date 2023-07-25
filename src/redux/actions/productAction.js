function getProducts (searchQuery){
    return async (dispatch, getState)=>{
        let url = `https://my-json-server.typicode.com/YeomCE/react-hnm-shopping-mall/products?q=${searchQuery}`
        let response = await fetch(url)
        let data = await response.json()
        dispatch({type:'GET_PRODUCT_SUCCESS', payload : {data}})
        console.log(data)
    }
}

export const productAction={getProducts};