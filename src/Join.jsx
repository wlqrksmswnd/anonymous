import { useState } from 'react'
// import './login.css'
import axios from 'axios';
import styles from './join.module.css'
import { useNavigate } from 'react-router-dom';




function Join(){
    const [username,setusername] = useState('')
    const [password,setpassword] = useState('')
    const [nickname,setnickname] = useState('')
    const navigate = useNavigate()
    function register(){
        axios.post('https://community-api.tapie.kr/auth/register',
            {
                "username": username,
                "nickname": nickname,
                "password": password
            }
        ).then(res => {
      console.log('회원가입 성공:', res.data);
      navigate('/login');
    })
    .catch(err => {
      console.error('회원가입 실패');
    });
    }
    return(
        <>
        <div className={styles.body}>
        <div className={styles.join}>
        <div id={styles.JoinText}>로그인</div>
        <div className={styles.container} >
            <div className={styles.input_container}>
                <div id={styles.username_input}>
                    <div id = {styles.joinUsername}>유저이름</div>
                    <input id={styles.input_id} type="text" placeholder='유저이름을 입력해주세요' value={username} onChange={(e) => {setusername(e.target.value)}}></input>
                </div>
                <div id={styles.nickname_input}>
                    <div id = {styles.joinNickname}>닉네임</div>
                    <input id={styles.input_nick} type="text" placeholder='닉네임을 입력해주세요' value={nickname} onChange={(e) => {setnickname(e.target.value)}}></input>
                </div>
                <div className={styles.password_input}>
                    <div id={styles.joinPassword}>비밀번호</div>
                    <input id={styles.input_password} type="text" placeholder='비밀번호를 입력해주세요' value={password} onChange={(e) => {setpassword(e.target.value)}}></input>
                </div>
                
            </div>
            <button id = {styles.Join_button} onClick={register}><div id={styles.box_Join}>회원가입</div></button>
        </div>
        </div>
        </div>
        </>
    )
    
}

export default Join;
