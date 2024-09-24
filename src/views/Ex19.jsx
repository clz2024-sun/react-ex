//import 라이브러리
import React, {useState, useEffect} from 'react';

const Ex18 = () => {
    /*---라우터 관련-------------------------------*/
    /*---상태관리 변수들(값이 변화면 화면 랜더링 )---*/
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [desc, setDesc] = useState('');
    const [blood, setBlood] = useState('');
    const [telecom, setTelecom] = useState('');
    const [hobbys, setHobby] = useState([]);

    /*---일반 변수--------------------------------*/
    /*---일반 메소드 -----------------------------*/
    /*---훅(useEffect)+이벤트(handle)메소드-------*/
    
    const handleClick = ()=>{
        console.log("클릭");

        
        const userVo = {
            id: 'clz2024.sun',
            pw: '1234abc',
            blood: 'ab',
            hobbys: ['movie'],
            telecom: 'etc',
            desc: '정우성입니다.'
        }

        setId(userVo.id);
        setPw(userVo.pw);
        setDesc(userVo.desc);
        setBlood(userVo.blood);
        setTelecom(userVo.telecom);
        setHobby(userVo.hobbys);
        
    };

    //id값이 변경될때
    const handleId = (e)=>{
        setId(e.target.value);
    };

    //마운트되었을때
    useEffect(()=>{
        const userVo = {
            id: 'clz2024.sun',
            pw: '1234abc',
            blood: 'ab',
            hobbys: ['movie'],
            telecom: 'etc',
            desc: '황일영입니다.'
        }
        setId(userVo.id);
        setPw(userVo.pw);
        setDesc(userVo.desc);
        setBlood(userVo.blood);
        setTelecom(userVo.telecom);
        setHobby(userVo.hobbys);
    },[]);
    return (
        <>
            <button type="button" onClick={handleClick}>적용</button>

            <form action="" method="">
                <div>
                    <label htmlFor="txt-id">아이디:</label>
                    <input id="txt-id" type="text" name="" value={id} onChange={handleId}/>
                </div>
                <div>
                    <label htmlFor="txt-pw">패스워드:</label>
                    <input id="txt-pw" type="text" name="" value={pw} />
                </div>
                <div>
                    <span>혈액형: </span>
                    <label htmlFor="rdo-a">A형</label>
                    <input id="rdo-a" type="radio" name="blood" value="a" checked={blood === 'a'} />
                    <label htmlFor="rdo-b">B형</label>
                    <input id="rdo-b" type="radio" name="blood" value="b" checked={blood === 'b'}/>
                    <label htmlFor="rdo-o">O형</label>
                    <input id="rdo-o" type="radio" name="blood" value="o"  checked={blood === 'o'} />
                    <label htmlFor="rdo-ab">AB형</label>
                    <input id="rdo-ab" type="radio" name="blood" value="ab"  checked={blood === 'ab'} />
                </div>
                <div>
                    <span>취미: </span>
                    <label htmlFor="chk-book">독서</label>
                    
                    <input id="chk-book" type="checkbox" name="" 
                        value="book" checked={hobbys.includes('book')} />
                    <label htmlFor="chk-trip">여행</label>
                    
                    <input id="chk-trip" type="checkbox" name="blood" 
                        value="trip" checked={hobbys.includes('trip')} />
                    <label htmlFor="chk-movie">영화</label>
                    <input id="chk-movie" type="checkbox" name="blood" 
                        value="movie" checked={hobbys.includes('movie')} />
                </div>
                <div>
                    <label htmlFor="sel-telecom">이동통신사</label>
                    <select id="sel-telecom" name="" value={telecom}>
                        <option value="">선택하세요</option>
                        <option value="skt" chs>SKT</option>
                        <option value="kt" >KT</option>
                        <option value="lg" >LGU+</option>
                        <option value="etc">알뜰통신</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="txt-desc">자기소개</label><br/>
                    <textarea id="txt-desc" name="" value={desc}></textarea>
                </div>
                <button button="submit">제출</button>
            </form>
        </>
    );
}

export default Ex18;
