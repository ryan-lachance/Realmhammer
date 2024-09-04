import { AppBar, Toolbar, Typography, Button, Box, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom';
function NavBar() {

    const navigate = useNavigate();

    const navHome = () => {
        navigate('/');
    };
    const navAbilities = () => {
        navigate('/abilities');
    };

    return (

        <AppBar sx={{ bgcolor: 'darkred' }}>
            <Toolbar>
                <Grid container alignItems="center">
                    <Grid item xs={4} container justifyContent="flex-start">
                        <Button onClick={navHome} color="inherit">Home</Button>
                        <Button onClick={navAbilities} color="inherit">Abilities</Button>
                        <Button onClick={navAbilities} color="inherit">Roster</Button>
                    </Grid>
                    <Grid item xs={4} container justifyContent="center">
                        <Typography variant="h6">Realmhammer</Typography>
                    </Grid>
                    <Grid item xs={4} />
                </Grid>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar