import { AppBar, Container, Toolbar, Typography, Button, Box, IconButton, Grid } from '@mui/material'
import './App.css'
import AbilityPage from './pages/AbilityPage'


function App() {
  return (

    <Box sx={{ padding: 5 }}>
      <AppBar sx={{ bgcolor: 'darkred' }}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item xs={4} container justifyContent="flex-start">
              <Button color="inherit">Abilities</Button>
              <Button color="inherit">Roster</Button>
            </Grid>
            <Grid item xs={4} container justifyContent="center">
              <Typography variant="h6">Realmhammer</Typography>
            </Grid>
            <Grid item xs={4} />
          </Grid>
        </Toolbar>
      </AppBar>
      <AbilityPage />
    </Box>
  )
}

export default App
