import { Box } from '@mui/material'
import './App.css'
import AbilityPage from './pages/AbilityPage'
import HomePage from './pages/HomePage'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ArmyContext } from './Contexts/ArmyContext'
import { useState } from 'react'


function App() {



  const [army, setArmy] = useState('')
  return (
    <ArmyContext.Provider value={{ army, setArmy }}>
      <Router>
        <Box sx={{ padding: 5 }}>
          <NavBar />
          <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/abilities' element={<AbilityPage />} />
          </Routes>
        </Box>
      </Router>
    </ArmyContext.Provider>

  )
}

export default App
