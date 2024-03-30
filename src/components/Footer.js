import '../style/footer.css'

export default function Footer() {return(
<footer>
      <div className="container">
        <div className="left-item">
          <div className="menu menu1">
            <ul>
              <li><a href="#">회사소개</a></li>
              <li><a href="#">이용약관</a></li>
              <li><a href="#">이용안내</a></li>
              <li><a href="#">개인정보처리방침</a></li>
            </ul>
            <p>상호: Yun's Store 대표: 홍길동</p>
            <p>사업자등록번호: 000-00-00000 통신판매업신고번호: 제2024-서울강남-00000호 [사업자정보확인]</p>
            <p>전화번호: 02-0000-0000 주소: (00000) 서울특별시 강남구 논현동 99-99</p>
            <p>개인정보보호책임자: 홍길동 이메일: hong@gildong.com</p>
          </div>
        </div>

        <div className="right-item">
          <div className="menu menu2">
            <h5 className="menu-title">고객센터</h5>
            <h1 className="tel">02-000-0000</h1>
            <ul>
              <li>평일: 10:00 - 17:00</li>
              <li>점심시간: 12:30 - 13:30</li>
              <li>토요일, 일요일, 공휴일, 대체휴일 OFF</li>
            </ul>
          </div>

          <div className="menu menu3">
            <div className="bank">
              <h5 className="menu-title">입금계좌</h5>
              <ul>
                <li>국민 000-00-0000000</li>
                <li>예금주: Yun's Store</li>
              </ul>
            </div>

            <div className="change">
              <h5 className="menu-title">교환/반품 주소</h5>
              <p>(00000) 서울특별시 강남구 논현동 99-99</p>
            </div>
          </div>

          <ul className="menu menu4">
            <li>
              <i className="fa-brands fa-instagram"></i>
            </li>
            <li>
              <i className="fa-brands fa-tiktok"></i>
            </li>
            <li>
              <i className="fa-brands fa-facebook"></i>
            </li>
            <li>
              <i className="fa-brands fa-twitter"></i>
            </li>
          </ul>
        </div>
      </div>
      <p className="copyright">Copyright &copy; Choi Yunji 2024</p>
    </footer>
)}