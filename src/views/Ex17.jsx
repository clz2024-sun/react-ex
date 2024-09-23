//import 라이브러리
import React from 'react';
const Ex17 = () => {
    /*---라우터 관련-------------------------------*/
    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    /*---일반 변수--------------------------------*/
    /*---일반 메소드 -----------------------------*/
    /*---훅(useEffect)+이벤트(handle)메소드-------*/

    const strArray = ['정우성', '이효리', '유재석'];

    /*--- includes() ----*/
    let result = strArray.includes('이효리');   //이효리
    //console.log(result);

    let result2 = strArray.includes('황일영');   //이효리
    console.log(result2);
    

    /*--- filter() ----*/
    let newArray = strArray.filter((name)=>{
            return name === '이효리'  //true  새로운 배열에 추가
    });

    console.log(newArray);

    return (
        <>
            <p>안녕하세요</p>
        </>
    );
}
export default Ex17;
