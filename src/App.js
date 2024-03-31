import './style/index.css'

import axios from 'axios';

import { Route, Routes } from "react-router-dom";
import { useEffect } from 'react';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./routes/Cart";
import Join from "./routes/Join";
import Login from "./routes/Login";
import ItemCard from './components/ItemCard';
import Detail from './routes/Detail';

function App() {
  // let REST_API_KEY = 'f6b0adbdaa62deca44f3f6e165e1ea52';
  // let URL = 'https://dapi.kakao.com/v3/search/book?target=title';

  // let option = {
  //   url: URL,
  //   method: "GET",
  //   headers:{Authorization: `KakaoAK ${REST_API_KEY}`},
  //   data: {query: "미움받을 용기"}
  // }

  // axios(option)
  // .then(result => {
  //   console.log(result);
  // });


  return (
    <div className="App">

      <Header></Header>

      <main>
        <Routes>
          <Route path='/' element={
            <div className='container'>
              <div className="main-banner"></div>
              <div className="main-book-area">
                <ItemCard/>
                
              </div>
          </div>
          }></Route>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="join" element={<Join></Join>}></Route>
          <Route path="cart" element={<Cart></Cart>}></Route>
          <Route path='detail' element={<Detail></Detail>}></Route>
        </Routes>
        
      </main>

      <Footer></Footer>
    </div>
  );
}

export default App;
