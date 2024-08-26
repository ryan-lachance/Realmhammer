import { AppBar, Container, Toolbar, Typography, Button, Box } from '@mui/material'
import './App.css'
import AbilityPage from './pages/AbilityPage'


function App() {

  return (

    <Box>
      <AppBar sx={{ bgcolor: 'darkred', color: '' }}>
        <Typography>RealmHammer</Typography>
      </AppBar>
      <AbilityPage />
    </Box >
  )
}

export default App
