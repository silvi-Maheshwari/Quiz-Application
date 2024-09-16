import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Quiz from './components/Quiz'
import Login from './components/Login'
import { useSelector } from 'react-redux'
import { Route, Routes, Navigate } from 'react-router-dom';
function App() {
 // const [count, setCount] = useState(0)
  const token=useSelector((state)=>state.auth.token);
  return (
    <>
     {/* <QuizApp></QuizApp> */}
        <Routes>
          <Route path='/login' element={<Login></Login>}/>
          <Route path='/quiz' element={token?<Quiz></Quiz>: <Navigate to={'/login'}/>}/>
          <Route path='*' element={<Navigate to={'/login'}/>}/>
        </Routes>
    </>
  )
}
export default App