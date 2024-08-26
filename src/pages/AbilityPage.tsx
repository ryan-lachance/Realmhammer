import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';
import { useState } from 'react';
import { SyntheticEvent as Event } from 'react';
import Ability from '../components/Ability'

function AbilityPage() {

    const [currentTab, setTab] = useState(0)

    const changeTab = (event: Event, newTab: number) => {
        setTab(newTab)
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: '100%',
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Tabs onChange={changeTab} value={currentTab}>
                    <Tab label='Start of Turn' />
                    <Tab label='Hero Phase' />
                    <Tab label='Movement Phase' />
                    <Tab label='Shooting Phase' />
                    <Tab label='Charge Phase' />
                    <Tab label='Combat Phase' />
                    <Tab label='End of Turn' />
                </Tabs>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                <Ability />
                <Ability />
                <Ability />
                <Ability />

            </Box>
        </Box>
    );

}


export default AbilityPage

