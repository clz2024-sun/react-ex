//import 라이브러리
import React, {useState} from 'react';

const Ex10 = () => {
    /*---일반변수-----------------------------------*/
    //let isLogin = true;

    /*---상태관리 변수들(값이 변화면 화면 랜더링)-----*/
    const [isLogin, setIsLogin] = useState(false);

    /*---일반 메소드 -------------------------------*/

    /*---생명주기 + 이벤트 관련 메소드(handle메소드)--*/
    //버튼클릭했을때
    const handleLoginChange = ()=>{
        console.log("클릭");
        setIsLogin(!isLogin); 
        /*
        if(isLogin === true){
            setIsLogin(false); 
        }else{
            setIsLogin(true); 
        }
        */
    };


    return (
        <>
            <button type="button" onClick={handleLoginChange}>로그인 상태변화</button>
        
            { (isLogin===true) ? (
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
            ) }
            

           
        
        </>
    );
}

export default Ex10;
