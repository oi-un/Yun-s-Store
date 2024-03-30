import './style/index.css'

import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cart from "./routes/Cart";
import Join from "./routes/Join";
import Login from "./routes/Login";
import ItemCard from './components/ItemCard';


function App() {
  return (
    <div className="App">

      <Header></Header>

      <main>
        <Routes>
          <Route path="login" element={<Login></Login>}></Route>
          <Route path="join" element={<Join></Join>}></Route>
          <Route path="cart" element={<Cart></Cart>}></Route>
        </Routes>
        <div className='container'>
          <div className="main-banner"></div>
          <div className="main-book-area">
            <ItemCard/>
            
          </div>
        </div>
      </main>

      

      
      <Footer></Footer>
    </div>
  );
}

export default App;
