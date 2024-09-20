import React, {useState} from "react";

const Ex08 = ()=>{
    
    /* --상태관리 관련변수들(화면에 랜더링)-- */
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    /* --이벤트 관련함수들-- */
    //이메일입력할때
    const handleEmailChange = (event)=>{
        console.log(event.target.value, "현재 text 창의 value 값을 setEmail(화면반영)을 통해서 변수에 반영");
        console.log("email 변수의 값을 읽어서 value에 반영");
        setEmail(event.target.value);
    };

    //패스워드입력할때
    const handlePasswordChange = (e)=>{
        setPassword(e.target.value);
    };

    //로그인할때
    const handleLogin = (e)=>{

        //이벤트 잡는다
        console.log("전송번튼 클릭");
        e.preventDefault();
        console.log("e.preventDefault() 기본기능 못하게함");
        console.log(e.target);
        
        //데이타수집 객체로묶기
        const formValue = {
            email: email,
            password: password
        };
        console.log(formValue);

        //전송
        //axios

    };

    return (
        <>
            <form onSubmit={handleLogin} >
                <div>
                    <label htmlFor="txt-email" >이메일</label>
                    <input id="txt-email" type="text" name="email" value={email} onChange={handleEmailChange} />
                </div>
                
                <div>
                    <label htmlFor="txt-password" >패스워드</label>
                    <input id="txt-password" type="text" name="password" value={password} onChange={handlePasswordChange} />

                </div>
                <button type="submit" onSubmit>로그인</button>
            </form>
        </>
    );
};

export default Ex08;