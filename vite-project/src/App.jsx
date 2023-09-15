import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { About } from './pages/About'
import { Projects } from './pages/Projects'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
         <Routes>
          <Route path ="/" element={<Home />}  />
          <Route path ="/contact" element ={<Contact />} />
          <Route path ="/projects" element ={<Projects />} />
          <Route path ="/about" element ={<About />} />
        </Routes>
    </>
  )
}

export default App
