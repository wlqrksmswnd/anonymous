import { useState } from "react"
import { createBrowserRouter, useNavigate } from 'react-router-dom'
import styles from './header.module.css'
import { LogIn } from 'lucide-react';
import axios from "axios";
import { useAuth } from "./AuthContext";


// // function logout ({logged,setlogged}){
// //   axios.post('https://community-api.tapie.kr/auth/logout',{
// //     withCredentials: true
// //   }).then(res => {
// //     console.log(logged)
// //     settlogged(false)
// //     window.location.reload()
// //   })

// }
function Header() {

// const [iflogin,setlogin] = useState(false)
// const { logged, setLogged } = useAuth();
const { logged, logout } = useAuth()
const navigate = useNavigate()
const handleClick = () => {
  if (logged) {
    logout()
  } else {
    navigate('/login')
  }
}
  return (
    <><div className={styles.headerContainer}>
        <div id = {styles.tapie}>TAPIE Board</div>
        <button id = {logged ? styles.login_btn_logged : styles.login_btn_notlogged} onClick={handleClick}><LogIn size={20} strokeWidth={1.5} /><div id='text_login'>{logged ? '로그아웃' : '로그인'}</div></button>
      </div>
    </>
  )
}

export default Header
