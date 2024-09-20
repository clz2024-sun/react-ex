//import 라이브러리
import React, {useState, useEffect} from 'react';

const Ex14 = () => {
    
    /*---상태관리 변수들(값이 변화면 화면 랜더링 )-----*/
    const [no, setNo] = useState(0);
    //let no = 0;
    /*---일반변수-----------------------------------*/
     
    /*---일반 메소드 -------------------------------*/
    
    /*---생명주기 + 이벤트 관련 메소드(handle메소드)--*/
    useEffect(()=>{
        console.log("no가변할때");
    }, [no]); 

    //버튼클릭했을대
    const handlePlus = ()=>{
        //setNo(no+1);
        setNo((prevNo)=>{
            return prevNo+1;
        });
        console.log(no);
    };

    return (   
        <>
            {no}
            <br/>
            <button type="button" onClick={handlePlus}>버튼</button>
        </>
    );
}

export default Ex14;