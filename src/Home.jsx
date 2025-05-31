import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { createBrowserRouter, useNavigate } from 'react-router-dom'
import { Flag, PencilLine } from 'lucide-react'
import Post from './Posts.jsx'
import axios from 'axios'
import logged from './Home.jsx'
import styles from './home.module.css'
import { useAuth } from './AuthContext'
// import { useNavigate } from 'react-router-dom'

function Home() {
  

  const [userdata,setuserdata] = useState([])
  const { logged } = useAuth();
  const navigate = useNavigate()


useEffect(() => {
    
  axios.get('https://community-api.tapie.kr/board/posts')
    .then(response => {
      setuserdata(response.data);
    })
    .catch(error => {
      console.error('데이터 불러오기 실패:', error);
    });
    
}, []);
  return (
    <>
    
      <div className={styles.body}>
        <div className={styles.container}>
          
        {/* <div className={styles.buttons}>sdhifh</div> */}
        <div className={styles.postHeader}>
        <button id = {styles.writePost} onClick={() => navigate('/writepost')} style={{opacity: logged ? "100%" : "30%"}} disabled = {!logged}><PencilLine size={20} strokeWidth={1.5} id={styles.icon} /><div id = {styles.writePostText}>글 작성하기</div></button>
        <div id = {styles.postsInfo}>전체 글 {userdata.length}개 작성됨</div>
        </div>
        <div className={styles.posts}>
          {logged && (
            <div id={styles.allmine}>
              <button id = {styles.all}>전체</button>
              <button id = {styles.mine}>나의 글</button>
            </div>
          )}
          <div className={styles.postsAll}>
          {userdata.map((user,index) => (
              <Post key = {index} user = {user}/>
            ))}
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Home
