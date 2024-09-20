//import 라이브러리
import React from 'react';

const Ex13 = () => {
    
    /*---상태관리 변수들(값이 변화면 화면 랜더링 )-----*/

    /*---일반변수-----------------------------------*/
     
    /*---일반 메소드 -------------------------------*/

    /*---생명주기 + 이벤트 관련 메소드(handle메소드)--*/
    const totalCnt = 5;
    const personList = [
        {no: 1, name: '정우성', hp: '010-1111-1111'},
        {no: 2, name: '이효리', hp: '010-2222-2222'},
        {no: 3, name: '유재석', hp: '010-3333-3333'},
        {no: 4, name: '강호동', hp: '010-4444-4444'},
        {no: 6, name: '서장훈', hp: '010-5555-5555'}
    ]
    return (	
        <>
            <table border="1">
                <thead>
                    <tr>
                        <th>번호</th>
                        <th>pk</th>
                        <th>이름</th>
                        <th>핸드폰</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        personList.map((personVo, index)=>{
                            console.log("aaa");
                            return (
                                <tr key={personVo.no}>
                                    <td>{totalCnt - index}</td>
                                    <td>{personVo.no}</td>
                                    <td>{personVo.name}</td>
                                    <td>{personVo.hp}</td>
                                </tr>
                            );
                        })
                    }
                   

                </tbody>
            </table>
        </>
    );
}

export default Ex13;