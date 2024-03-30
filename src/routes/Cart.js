import '../style/cart.css';

export default function Cart() {
  return(
    <>
    <div className="container">
        <h1 className="page-title">cart</h1>
        <p className="remove-item">선택 상품 삭제 <button className="btn btn-white">삭제</button></p>
        <table className="cart">
          <colgroup>
            <col />
            <col />
            <col />
            <col />
          </colgroup>
          <tr>
            <td><input type="checkbox" name="" id="" /></td>
            <td>
              <img src="https://mizmiss.com/web/upload/category/editor/2024/02/08/b5d03f0576af864a9152ef42cd30fd57.png" alt="" />
            </td>
            <td>
              <h3 className="item-name"><a href="">이것은 이러저러한 책이다.</a></h3>
              <p className="item-option">1권</p>
            </td>
            <td>
              <button className="btn btn-grey">+</button>
              1
              <button className="btn btn-grey">-</button>
            </td>
          </tr>
        </table>

        <div className="cart-btns">
          <button className="btn btn-white">쇼핑 계속하기</button>
          <button className="btn btn-black">주문하기</button>
        </div>
      </div>
      </>
  )
}