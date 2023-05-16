import './App.css';
import { Route, Routes } from 'react-router-dom';
import ProductAll from './page/ProductAll';
import Login from './page/Login';
import Navbar from './component/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from 'react';
import PrivateRoute from './route/PrivateRoute';

// 1. 전체 상품 페이지 / 로그인 페이지 / 상품 상세페이지
// 1-1. 네비게이션 바 만들기
// 2. 전체 상품 페이지 : 전체 상품을 볼 수 있다.
// 3. 로그인 버튼을 누르면 로그인 페이지가 나온다.
// 4. 로그인이 되어있지 않은 상태로 상품 디테일을 눌렀을 경우 로그인 페이지가 먼저 나온다.
// 5. 디테일 페이지에서 로그아웃 클릭 시 로그아웃 되며 로그인 페이지가 나온다.
// 6. 로그인을 하면 로그아웃 버튼이 보이고, 로그아웃 하면 로그인 버튼이 보인다.
// 7. 상품을 검색할 수 있다.

function App() {

  const [authenticate, setAuthenticate] = useState(false);
  useEffect(()=>{
    console.log(authenticate)
  },[authenticate])

  return (
    <div>
      <Navbar authenticate={authenticate} setAuthenticate={setAuthenticate}/>
      <Routes>
        <Route path='/' element={<ProductAll />} />
        <Route path='/login' element={<Login setAuthenticate={setAuthenticate}/>} />
        <Route path='/product/:id' element={<PrivateRoute authenticate={authenticate} />} />
      </Routes>
    </div>
  );
}

export default App;
