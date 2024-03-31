import { useDispatch, useSelector } from 'react-redux';
import '../style/detail.css';
import { decrease, increase } from '../store';


export default function Detail() {
  let dispatch = useDispatch();
  
  let quantity = useSelector((state) => state.quantity);

  return(
    <div className="container">
      <div className="detail-top">
        <div className="detail-top-img">
          <img
            src="https://mizmiss.com/web/upload/category/editor/2024/02/08/b5d03f0576af864a9152ef42cd30fd57.png">
          </img>
        </div>
        <div className="detail-top-info">
          <h1 className="item-title">이건 이러저러한 책이다.</h1>
          <p className='item-description'>이 책의 이러저런 아이저런 아이이런 에베레레ㅔㅔㅔㅇ 호이요이뾰ㅛㅇ</p>
          <p className='item-price'>5,000원</p>

          <h3>주문옵션</h3>
          <ul>
            <li>수량: 
              <div className='item-quantity'>
                <button className='btn btn-grey'
                  onClick={()=>dispatch(increase())}
                >+</button>
                {quantity}
                <button className='btn btn-grey'
                  onClick={()=>dispatch(decrease())}
                >-</button>
              </div>
            </li>
          </ul>

          <h3>주문정보</h3>
          <div>
            <span>×</span>
            <h5>이건 이러저러한 책이다.</h5>
            <p className='item-price'>5,000원</p>
          </div>
          <h5>TOTAL: 5,000원(1개)</h5>
          <button className='btn btn-black'>구매하기</button>
          <button className='btn btn-white'>장바구니</button>
          <button className='btn btn-white'>관심상품 등록</button>
        </div>
      </div>

      <div className='detail-content'>
        <ul className='tab-menu'>
          <li>상품정보</li>
          <li>상품후기</li>
          <li>상품문의</li>
          <li>구매정보</li>
        </ul>
      </div>
    </div>
  )
}