import axios from "axios";
import { useState } from "react";
import styles from "./writepost.module.css"
import { useNavigate } from "react-router-dom";
import { SendHorizontal } from 'lucide-react'


function WritePost(){
    const [title,setTitle] = useState("")
    const [content,setContent] = useState("")
    const navigate = useNavigate() 
    return(
    <div className={styles.body}>
    <div className={styles.write}>
    <div id={styles.writepost}>글 작성</div>
    <div className={styles.container}>
    <div className={styles.inputContainer}>
        <div className={styles.titleContainer}>
            <div id = {styles.titleText}>제목</div>
            <input id={styles.titleInput} onChange={(e) => {setTitle(e.target.value)}} placeholder="제목을 입력해주세요"></input>
        </div>
        <div className={styles.contentContainer}>
            <div id={styles.contentText}>내용</div>
            <textarea id={styles.contentInput} onChange={(e) => {setContent(e.target.value)}} placeholder="내용을 입력해주세요"></textarea>
        </div>
    </div>
        <button id = {styles.postWriting} onClick={post}><SendHorizontal size={20} strokeWidth={1.5} id={styles.icon}/><div styles = {styles.postText}>등록하기</div></button>
    </div>

    </div>
    
</div>
)
function post(){
    axios.post('https://community-api.tapie.kr/board/posts',{
        "title": title,
        "content": content
    },
    {
        withCredentials: true
    }).then(() => {navigate('/')})
}

}


export default WritePost