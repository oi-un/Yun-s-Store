import { useNavigate } from 'react-router-dom'
import '../style/header.css'

export default function Header() {
  const navigate = useNavigate();
  return(
    <header>
    <div className="container">
      <div className="head-top">
        <a className="logo" onClick={() => navigate('/')}>Yun's Store</a>

        <nav className="top-nav">
          <ul className="top-nav-item">
            <li><a onClick={()=> navigate('/login')}>login</a></li>
            <li><a onClick={() => navigate('/join')}> join</a></li>
            <li><a href="#" onClick={() => navigate('/cart')}>cart</a></li>
            <li><a href="#" onClick={() => navigate('/')}>my page</a></li>
          </ul>

          <div className="search">
            <input type="text" className="search-input" placeholder="검색어를 입력하세요." />
            <span className="search-btn">
              <i className="fa-solid fa-magnifying-glass"></i>
            </span>
          </div>
        </nav>
      </div>
    </div>
    <div className="container">
      <nav className="bottom-nav">
        <ul className="category">
          <li><a href="#">menu 1</a></li>
          <li><a href="#">menu 2</a></li>
          <li><a href="#">menu 3</a></li>
          <li><a href="#">menu 4</a></li>
        </ul>
      </nav>
    </div>
  </header>
  )}