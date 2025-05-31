import axios from "axios";
import { useState } from "react";
import styles from "./writepost.module.css"
import { useNavigate } from "react-router-dom";


function WritePost(){
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const navigate = useNavigate() 
    return(
    <div className={styles.container}>
    <div id={styles.writepost}>글 작성</div>
    <div className={styles.inputContainer}>
        <div className={styles.titleContainer}>
            <div id = {styles.titleText}>제목</div>
            <input id={styles.titleInput} onChange={(e) => {setTitle(e.target.value)}}></input>
        </div>
        <div className={styles.contentContainer}>
            <div id={styles.contentText}>내용</div>
            <input id={styles.contentInput} onChange={(e) => {setContent(e.target.value)}}></input>
        </div>
    </div>
    <button id = {styles.postWriting} onClick={post}>등록하기</button>
</div>
)
function post(){
    axios.post('https://community-api.tapie.kr/board/posts',{
        "title": title,
        "content": content
    },      {
        withCredentials: true
    }).then(() => {navigate('/');})
}

}


export default WritePost