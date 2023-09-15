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
          <Route path ="/mariners" element ={<Contact />} />
          <Route path ="/nba" element ={<Projects />} />
          <Route path ="/seahawks" element ={<About />} />
        </Routes>
    </>
  )
}

export default App
