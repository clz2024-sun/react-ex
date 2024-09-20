//import 라이브러리
import React from 'react';

const Ex09 = () => {


    const isLogin = false;  //t면로그인성공  f로그인안됨 을 가정

    /*---상태관리 변수들(값이 변화면 화면 랜더링)--*/
   


    /*---일반 메소드 ----------------------------*/

    /*---생명주기 + 이벤트 관련 메소드 -----------*/
    return (
        <>
            { (isLogin===true)? <p>로그인된화면</p> : <p>로그인안된화면</p> }
            <br/><br/>
           
            {
                (isLogin===true)? (
                    <ul>
                        <li>로그인된 화면</li>
                        <li>로그아웃버튼</li>
                        <li>회원정보수정 화면이동</li>
                    </ul>
                ) : (
                    <ul>
                        <li>로그인안된 화면</li>
                        <li>로그인버튼</li>
                        <li>회원가입 화면이동</li>
                    </ul>
                )
            }
        </>
    );
}

export default Ex09;
