import styles from './posts.module.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

function Post({user}){
    return(

    <div className={styles.postContainer}>
        <div id = {styles.title}>{user.title}</div>
        <div className={styles.frame}>
        <div id={styles.username}>{user.id}</div>
        {/* <div>{user.createdAt}</div> */}
        </div>
        <div id = {styles.content}>{user.content}</div>
    </div>

    )
}

export default Post