import React, { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'

const AuthContext = createContext()

export function AuthProvider({ children }) {
  const [logged, setLogged] = useState(false)

  useEffect(() => {
    axios.get('https://community-api.tapie.kr/auth/me',
        { withCredentials: true })
      .then(res => {
        if (res.data && res.data.username) setLogged(true)
        else setLogged(false)
      })
      .catch(() => setLogged(false))
  }, [])

  const logout = () => {
    axios.post('https://community-api.tapie.kr/auth/logout', {
      withCredentials: true,
    }).then(() => {
      setLogged(false)
    }).catch((err) => {
      console.error(err)
    })
  }

  return (
    <AuthContext.Provider value={{ logged, setLogged, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}