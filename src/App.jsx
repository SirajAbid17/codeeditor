
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Codeeditor from './components/Codeeditor'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './components/About'
import Contact from './components/Contact'

function App() {
 

  return (
    <>
    <Navbar/>
    <Routes>
<Route path='/' element={<Codeeditor/>}/>
<Route path='/about' element={<About/>}/>
<Route path='/contact' element={<Contact/>}/>
    </Routes>
   
    <Footer/>
    </>
  )
}

export default App
