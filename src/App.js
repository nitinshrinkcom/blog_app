import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Topbar from './components/topbar/Topbar'
import Home from './pages/Home/Home'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import Settings from './pages/settings/Settings'
import Single from './pages/single/Single'
import Write from './pages/write/Write'


const App = () => {
  const user = false;
  return (
    <Router>
      <Topbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/register" element ={ user ? <Home /> : <Register /> } />
        <Route path="/login" element ={ user ? <Home /> : <Login /> } />
        <Route path="/write" element ={user ? <Write /> : <Register /> } />
        <Route path="/settings" element ={user ? <Settings /> : <Register /> } />
        <Route path="/post/:postId" element ={<Single />} />
      </Routes>
    </Router>
  )
}

export default App