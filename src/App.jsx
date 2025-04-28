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
import Character from './pages/Character'
import CharDetails from './pages/CharDetails'
import Movie from './pages/Movie'
import MovieDetails from './pages/MovieDetails'
import DashboardLayout from './layouts/DashboardLayout'
import Overview from './pages/dashboard/Overview'
import Proflie from './pages/dashboard/Proflie'
import Setting from './pages/dashboard/Setting'
import UseCallback from './pages/UseCallback'
import TaskList from './pages/TaskList'
import AdminNavbar from './components/AdminNavbar'


export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/register' element={<Register />} />
        <Route path='/forms' element={<Forms />} />
        <Route path='/submitForm' element={<SubmitForm />} />
        <Route path='/multiform' element={<Multiform />} />
        <Route path='/users' element={<Users />} />
        <Route path='/nasa' element={<Nasa />} />
        <Route path='/github' element={<Git />} />
        <Route path='/character' element={<Character />} />
        <Route path='/character/:id' element={<CharDetails />} />
        <Route path='/movie' element={<Movie />} />
        <Route path="/movie/:movieTitle" element={<MovieDetails />} />
        <Route path="/memo" element={<UseCallback />} />
        <Route path="/task" element={<TaskList />} />
        <Route path='/dashboard' element={<><AdminNavbar/><DashboardLayout /></>} >
          <Route path='overview' element={<><Overview /></>} />
          <Route path='profile' element={<><Proflie /></>} />
          <Route path='setting' element={<><Setting /></>} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Footer />
    </Router>
  )
}
