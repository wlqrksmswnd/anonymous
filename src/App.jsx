import { useState } from 'react'
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [count, setCount] = useState(0)




  return (
    <>
      <div id='everything'>
        <div id='top-bar'>
              <h2 id='title'>TAPIE Board</h2>
              <div id='login'>
                <p id='name'>{name}</p> {/*로그인시 닉네임 값 가져오기기*/ }
                <button id='login-button'><FontAwesomeIcon icon={faRightToBracket} id='login-icon' />로그인</button>
              </div>
        </div>
        <div id='main'>

        </div>
      </div>
    </>
  )
}

export default App
