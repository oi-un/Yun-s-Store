import '../style/join.css'

export default function Join() {
  return(
    <>
    <div className="container">
        <h1 className="page-title">join</h1>

        {/* <!-- <div className="select-box">
          <select name="" id="">
            <option value="">1</option>
            <option value="">2</option>
            <option value="">3</option>
          </select>
          <span className="icon-arrow">
            <img src="../images/down-btn.jpg" alt="" />
          </span>
        </div> --> */}

        <form action="#" className="form-join">
          <table>
            <tr>
              <th className="essential">아이디</th>
              <td><input type="text" /> <span>(영문 소문자/숫자, 4~16자)</span></td>
            </tr>
            <tr>
              <th className="essential">비밀번호</th>
              <td><input type="text" /> <span>(영문 대소문자/숫자/특수문자 중 2가지 이상 조합, 10~16자)</span></td>
            </tr>
            <tr>
              <th className="essential">비밀번호 확인</th>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <th className="essential">이름</th>
              <td><input type="text" /></td>
            </tr>
            <tr>
              <th>휴대전화</th>
              <td>
                <select name="" id="">
                  <option value="">010</option>
                  <option value="">011</option>
                  <option value="">016</option>
                  <option value="">017</option>
                  <option value="">018</option>
                  <option value="">019</option>
                </select>
                - <input type="text" className="input-tel" /> -
                <input type="text" className="input-tel" />
              </td>
            </tr>
            <tr>
              <th className="essential">이메일</th>
              <td><input type="text" className="input-email" /></td>
            </tr>
          </table>

          <h5 className="page-title-small">전체동의</h5>
          <table className="agree-box">
            <tr>
              <td>
                <input type="checkbox" name="yes" id="all-yes" />
                <label for="all-yes">이용약관 및 개인정보 수집 및 이용, 쇼핑정보 수신(선택)에 모두 동의합니다.</label>
              </td>
            </tr>
            <tr>
              <td>
                <h5 className="terms-title">[필수] 이용약관 동의</h5>
                <div className="terms"></div>
                <div className="temrs-yes">
                  이용약관에 동의하십니까?
                  <input type="checkbox" name="yes" id="yes-1" />
                  <label for="yes-1">동의함</label>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <h5 className="terms-title">[필수] 개인정보 수집 및 이용 동의</h5>
                <div className="terms"></div>
                <div className="temrs-yes">
                  개인정보 수집 및 이용에 동의하십니까?
                  <input type="checkbox" name="yes" id="yes-2" />
                  <label for="yes-2">동의함</label>
                </div>
              </td>
            </tr>
            <tr>
              <td>
                <h5 className="terms-title">[선택] 쇼핑정보 수신 동의</h5>
                <div className="terms"></div>
                <div className="temrs-yes">
                  SMS 수신을 동의하십니까?
                  <input type="checkbox" name="yes" id="yes-3" />
                  <label for="yes-3">동의함</label>
                  <br />
                  이메일 수신을 동의하십니까?
                  <input type="checkbox" name="yes" id="yes-4" />
                  <label for="yes-4">동의함</label>
                </div>
              </td>
            </tr>
          </table>

          <div className="join-btns">
            <button className="btn btn-black">회원가입</button>
            <button className="btn btn-white" type="reset">취소</button>
          </div>
        </form>
      </div>
    </>
  )
}