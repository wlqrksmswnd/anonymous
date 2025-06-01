import { useAuth } from './AuthContext'
import { useState } from 'react'
import styles from './login.module.css'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


import { LogIn } from 'lucide-react';
function Login(){
    const [username,setusername] = useState('')
    const [password,setpassword] = useState('')
    const navigate = useNavigate()
    const { setLogged } = useAuth();
    const navigatejoin = () =>{
        navigate("/join")
    }
    return(
        <>
        <div className={styles.body}>
        <div className={styles.login}>
        <div id={styles.loginText}>로그인</div>
        <div className={styles.container} >
            <div className={styles.input_container}>
                <div id={styles.username_input}>
                    <div id = {styles.loginUsername}>유저이름</div>
                    <input id={styles.input_id} type="text" placeholder='유저이름을 입력해주세요' value={username} onChange={(e) => {setusername(e.target.value)}}></input>
                </div>
                <div className={styles.password_input}>
                    <div id={styles.loginPassword}>비밀번호</div>
                    <input id={styles.input_password} type="text" placeholder='비밀번호를 입력해주세요' value={password} onChange={(e) => {setpassword(e.target.value)}}></input>
                </div>
                
            </div>
            <button id = {styles.login_button} onClick={setLoginData}><LogIn size={20} strokeWidth={1.5} color='white'/><div id={styles.box_login}>로그인</div></button>
            <button id = {styles.join_button} onClick={navigatejoin}><div id={styles.ifNotLogin}>계정이 없다면 회원가입</div></button>
        </div>
        </div>
        </div>
        </>
    )
    function setLoginData(){
        axios.post('https://community-api.tapie.kr/auth/login',{
            "username": username,
            "password": password
        },
    {
        withCredentials: true
    }).then(res => {
            console.log("로그인 성공!")
             setLogged(true)
            
      navigate('/')
    })
    .catch(err => {
      alert("로그인 실패")
    });
    }
}

export default Login;
