import Navbar from './components/sections/Navbar'
import './App.css'
import Home from './pages/Home'
import { useState } from 'react'
import Services from './pages/Services'

function App() {

  const [pageID, setPageID] =  useState('home');

  return (
    <div className='h-screen'>

      <header>
        <Navbar/>
      </header>

      <main>
        
        {
           (pageID === 'home') ? (
            <Home />
           ) : <Services />
        }

      </main>

    </div>
  )
}

export default App
