import './App.css'
import { Routes, Route, Link } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Login from './components/Login'
import Signup from './components/Signup'
import Journal from './components/Journal'

function App() {

  return (
    <>
    <nav className='nav'>
      <Link to="/">Home</Link> | <Link to="/about">about</Link> | <Link to="/journal">Journal</Link>  | <Link to="/login">login</Link> | <Link to="/signup">signup</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/about" element={<About/>} />
      <Route path="/journal" element={<Journal/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>} />
    </Routes>
    </>
  )
}

export default App
