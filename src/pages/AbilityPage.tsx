import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Button, IconButton, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { SyntheticEvent as Event } from 'react';
import Ability from '../components/Ability'
import dataTemplate from '../data/data_template.json'; // Adjust the path as needed
import AddIcon from "@mui/icons-material/Add"


interface AbilityInterface {
    name: string;
    declare: string;
    phase: string;
    activation: string;
    cost: string;
    effect: string;
    keywords: string;
}

function AbilityPage() {

    const [currentTab, setTab] = useState(0)
    const [abilities, setAbilities] = useState<AbilityInterface[]>([])

    useEffect(() => {
        // Fetch abilities data from JSON file
        setAbilities(dataTemplate.abilities);
    }, []);


    const changeTab = (event: Event, newTab: number) => {
        setTab(newTab)
    }

    function getPhase(index: number) {
        let result: string = ''
        switch (index) {
            case 0: return 'Deployment'
            case 1: return 'Start'
            case 2: return 'Hero'
            case 3: return 'Movement'
            case 4: return 'Shooting'
            case 5: return 'Charge'
            case 6: return 'Combat'
            case 7: return 'End'
            case 8: return 'Passive'
            default: 'Start'

        }
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: '75vw',
        }}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Tabs onChange={changeTab} value={currentTab} variant='scrollable' scrollButtons='auto' sx={{
                    '& .MuiTabs-indicator': {
                        backgroundColor: 'darkred', // Change this to your desired highlight color
                    },
                    '& .Mui-selected': {
                        color: 'maroon', // Change this to your desired selected tab color
                    },
                }}>
                    <Tab label='Deployment Phase' />
                    <Tab label='Start of Turn' />
                    <Tab label='Hero Phase' />
                    <Tab label='Movement Phase' />
                    <Tab label='Shooting Phase' />
                    <Tab label='Charge Phase' />
                    <Tab label='Combat Phase' />
                    <Tab label='End of Turn' />
                    <Tab label='Passive' />
                </Tabs>
            </Box>
            <Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center', marginY: '10px' }}>
                <Button variant='contained' sx={{ bgcolor: 'darkred', '&:hover': { bgcolor: 'grey' } }}>+ Add an Ability</Button>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {abilities.filter(ability => ability.phase === getPhase(currentTab)).map((ability) => (
                    <Ability
                        name={ability.name}
                        declare={ability.declare}
                        phase={ability.phase}
                        activation={ability.activation}
                        cost={ability.cost}
                        effect={ability.effect}
                        keywords={ability.keywords}
                    />
                ))}
            </Box>
        </Box>
    );

}


export default AbilityPage

