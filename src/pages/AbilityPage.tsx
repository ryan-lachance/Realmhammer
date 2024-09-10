import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { SyntheticEvent as Event } from 'react';
import Ability from '../components/Ability';
import defaultData from '../data/data_template.json'; // Adjust the path as needed
import { ArmyContext } from '../Contexts/ArmyContext';

interface AbilityInterface {
    id: number;
    name: string;
    declare: string;
    phase: string;
    activation: string;
    cost: string;
    effect: string;
    keywords: string;
}
interface UnitInterface {
    id: number;
    name: string;
    move: number;
    health: number;
    control: number;
    save: number;
    weapons: WeaponInterface[];
    keywords: string;
}
interface WeaponInterface {
    id: number;
    attacks: number
    hit: number
    wound: number
    rend: number
    damage: number
    ability: string
}


function AbilityPage() {
    const [currentTab, setTab] = useState(0);
    const [abilities, setAbilities] = useState<AbilityInterface[]>([]);
    const [roster, setRoster] = useState<UnitInterface[]>([]);
    const [name, setName] = useState<string>('');
    const { army } = useContext(ArmyContext);

    useEffect(() => {
        // Fetch abilities data from JSON file
        setName(army);
        const storedData = localStorage.getItem(army);
        if (storedData != null) {
            const parsedData = JSON.parse(storedData);
            setAbilities(parsedData.abilities);
            setRoster(parsedData.roster);
        } else {
            setAbilities(defaultData.abilities);
            setRoster(defaultData.roster);

        }
        console.log(`Army state updated: ${army}`);
    }, [army]); // Add `army` as a dependency

    const rename = (_event: ChangeEvent<HTMLInputElement>) => {
        setName(_event.target.value);
    };

    const changeTab = (_event: Event, newTab: number) => {
        setTab(newTab);
    };

    function addAbility() {
        const newAbility: AbilityInterface = {
            id: abilities.length + 1, // Generate a new ID
            name: 'New Ability',
            declare: 'Declare text',
            phase: getPhase(currentTab),
            activation: 'Activation text',
            cost: 'Cost text',
            effect: 'Effect text',
            keywords: 'Keywords text',
        };

        const updatedAbilities = [...abilities, newAbility];
        setAbilities(updatedAbilities);
        const updatedData = { abilities: updatedAbilities, roster: roster };
        localStorage.setItem(name, JSON.stringify(updatedData));
        console.log('Ability added:', newAbility);
    }

    function getPhase(index: number): string {
        switch (index) {
            case 0: return 'Deployment';
            case 1: return 'Start';
            case 2: return 'Hero';
            case 3: return 'Movement';
            case 4: return 'Shooting';
            case 5: return 'Charge';
            case 6: return 'Combat';
            case 7: return 'End';
            case 8: return 'Passive';
            default: return 'Start';
        }
    }

    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: '75vw',
        }}>
            <TextField id="army-name" label="Army Name" variant="standard" value={name} onChange={rename} />
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Tabs onChange={changeTab} value={currentTab} variant='scrollable' scrollButtons='auto' sx={{
                    '& .MuiTabs-indicator': {
                        backgroundColor: 'darkred', // Change this to your desired highlight color
                    },
                    '& .MuiTab-root.Mui-selected': {
                        color: 'darkred', // Change this to your desired selected tab color
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
                <Button onClick={addAbility} variant='contained' sx={{ bgcolor: 'darkred', '&:hover': { bgcolor: 'grey' } }}>+ Add an Ability</Button>
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                {abilities.filter(ability => ability.phase === getPhase(currentTab)).map((ability) => (
                    <Ability
                        key={ability.id}
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

export default AbilityPage;
