import styles from './posts.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import dayjs from 'dayjs'

function Post({user}){
    console.log(user)
    const encryptedTime = user.createdAt
    const time = dayjs(encryptedTime).format("YYYY. MM. DD")
    return(

    <div className={styles.postContainer}>
        <div id = {styles.title}>{user.title}</div>
        <div className={styles.frame}>
        <div id={styles.username}>{user.author.nickname}·{time}</div>
        <div></div>
        </div>
        <div id = {styles.content}>{user.content}</div>
    </div>

    )
}

export default Post