import React from 'react'
import { BrowserRouter as Router, Routes, Route, Form } from 'react-router-dom'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NotFound from './pages/NotFound'
import Forms from './pages/Forms'
import Multiform from './pages/Multiform'
import SubmitForm from './pages/SubmitForm'
import Register from './pages/Register'
import Users from './pages/Users'
import Nasa from './pages/Nasa'
import Git from './pages/Git'


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register/>} />
        <Route path='/forms' element={<Forms />} />
        <Route path='/submitForm' element={<SubmitForm/>} />
        <Route path='/multiform' element={<Multiform/>} />
        <Route path='/users' element={<Users />}  />
        <Route path='/nasa' element={<Nasa />}  />
        <Route path='/github' element={<Git />}  />
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}
