import { useState } from 'react'
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'
import { faPenToSquare } from '@fortawesome/free-regular-svg-icons';

function App() {
  const [count, setCount] = useState(0)




  return (
    <>
      <div className='everything'>

        <div className='top-bar'>
          <h2 className='title'>TAPIE Board</h2>
          <div className='login'>
            <p className='name'>{name}</p> {/*로그인시 닉네임 값 가져오기기*/ }
            <button className='login-button'><FontAwesomeIcon icon={faRightToBracket} className='login-icon' />로그인</button>
          </div>
        </div>

        <div className='main'>
          <div className='write'>
            <button className='write-button'><FontAwesomeIcon icon={faPenToSquare} className='write-icon' />웹 작성하기</button>
            <p className='write-p'>전체 글 {/*num*/}개 작성됨</p>  {/* 게시물 추가할때마다 num 값 1씩 증가*/}
          </div>

          <div className='post-box'>
              
          </div>
        </div>
    
      </div>
    </>
  )
}

export default App
