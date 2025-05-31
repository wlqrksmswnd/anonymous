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

function Home() {
  

  const [userdata,setuserdata] = useState([])
  const { logged } = useAuth();
  const navigate = useNavigate()
  const [showMine, setShowMine] = useState(false)
  axios.get('https://community-api.tapie.kr/board/posts/search?author=1&author_type=id').then(res => console.log(res))
  useEffect(() => {
    const root = 'https://community-api.tapie.kr'
  // axios.get('https://community-api.tapie.kr/board/posts/search?author=@me',{ withCredentials: true })
  axios.get(showMine ? `https://community-api.tapie.kr/board/posts/search?author=@me`:`https://community-api.tapie.kr/board/posts`,{ withCredentials: true })
    .then(response => {
      const data = response.data
      setuserdata(data);
      console.log(data)
    })
    .catch(error => {
      console.error('데이터 불러오기 실패:', error);
    });
},[showMine])
  
  return (
    <>
    
      <div className={styles.body}>
        <div className={styles.container}>
          
        {/* <div className={styles.buttons}>sdhifh</div> */}
        <div className={styles.postHeader}>
        <button id = {styles.writePost} onClick={() => navigate('/writepost')} style={{opacity: logged ? "100%" : "30%"}} disabled = {!logged}><PencilLine size={20} strokeWidth={1.5} id={styles.icon} /><div id = {styles.writePostText}>글 작성하기</div></button>
        <div id = {styles.postsInfo}>{showMine ? `나의 글 ${userdata?.length}개 작성됨`:`전체 글 ${userdata?.length}개 작성됨`}</div>
        </div>
        <div className={styles.posts}>
          {logged && (
            <div id={styles.allmine}>
              <button id = {styles.all} style={{backgroundColor: showMine ? 'black' : "#565656"}}onClick={()=>showMine && setShowMine(!showMine)}>전체</button>
              <button id = {styles.mine} style={{backgroundColor: showMine ? "#565656" : 'black'}} onClick={()=>!showMine && setShowMine(!showMine)}>나의 글</button>
            </div>
          )}
          <div className={styles.postsAll}>
            
          {(userdata ?? []).map((user, index) => (
      <Post key={index} user={user} />
      ))}
          </div>
        </div>
        </div>
      </div>
    </>
  )
}

export default Home
