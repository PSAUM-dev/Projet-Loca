import Navbar from './components/sections/Navbar'
import './App.css'
import Home from './pages/Home'
import { useState } from 'react'
import Services from './pages/Services'
import Pharmacies from './pages/Pharmacies'

function App() {

  const [pageID, setPageID] =  useState('homes');

  return (
    <div className='h-screen'>

      <header>
        <Navbar/>
      </header>

      <main>
        
        {
           (pageID === 'home') ? (
            <Home />
           ) : <Pharmacies />
        }

      </main>

    </div>
  )
}

export default App
