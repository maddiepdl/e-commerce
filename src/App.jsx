import NavBar from './components/NavBar.jsx'
import Hero from './pages/Hero.jsx'
import Products from './pages/Products.jsx'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </>
  )
}

export default App
