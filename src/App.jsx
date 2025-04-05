import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <div className="pt-16">
        <Header />
        <main className="content">
          <Home />
          <About />
          <Projects></Projects>
          <Contact></Contact>
        </main>
        <Footer />
      </div>
      
    </>
  )
}

export default App
