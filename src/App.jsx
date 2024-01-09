import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Link, Route, Routes } from 'react-router-dom'
import About from './components/About'
import Home from './components/Home'
import User from './components/User'
import UserDetails from './components/UserDetails'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full h-12 p-2 flex justify-center gap-16 bg-blue-400 font-bold text-xl'>
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
      <Link to='/user'>User</Link>
      </div>
      <div className='w-full p-10 text-2xl'>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/user' element={<User/>}></Route>
        <Route path='/user/:id' element={<UserDetails/>}></Route>
      </Routes>
      </div>
    </>
  )
}

export default App
