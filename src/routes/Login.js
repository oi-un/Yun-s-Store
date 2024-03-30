import '../style/login.css';

export default function Login() {
  return(
    <div className="container">
      <h1 className="page-title">login</h1>

      <div className="login-box">
        <form action="#" className="form-login">
          <div className="login-input">
            <input type="text" className="id" placeholder="ID" />
            <input type="password" className="pwd" placeholder="PASSWORD" />
          </div>
          <button className="btn btn-black submit-btn">LOGIN</button>
        </form>
        <div className="login-option">
          <input type="checkbox" name="" id="remember-id" />
          <label for="remember-id">아이디 저장</label>
        </div>
        <div className="login-btns">
          <button className="btn btn-white">join us</button>
          <button className="btn btn-white">forgot id</button>
          <button className="btn btn-white">forgot password</button>
        </div>
        <p className="login-comment">회원가입을 하시면 다양하고 특별한 혜택이 준비되어 있습니다.</p>
      </div>
    </div>
  )
}