import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Button, TextField } from '@mui/material';
import { ChangeEvent, useContext, useEffect, useState } from 'react';
import { SyntheticEvent as Event } from 'react';
import Ability from '../components/Ability';
import defaultData from '../data/data_template.json'; // Adjust the path as needed
import { ArmyContext } from '../Contexts/ArmyContext';

interface WeaponInterface {
    id: number;
    attacks: number
    hit: number
    wound: number
    rend: number
    damage: number
    ability: string
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

function RosterPage() {
    const { army } = useContext(ArmyContext);
    const [name, setName] = useState<string>('');
    const [roster, setRoster] = useState<UnitInterface[]>([]);


    useEffect(() => {
        setName(army);
        // Fetch abilities data from JSON file
        const storedData = localStorage.getItem(army);
        if (storedData != null) {
            const parsedData = JSON.parse(storedData);
            setRoster(parsedData.roster);
        } else {
            setRoster(defaultData.roster);
        }
        console.log(`Army state updated: ${army}`);
    }, [army]); // Add `army` as a dependency

    const rename = (_event: ChangeEvent<HTMLInputElement>) => {
        setName(_event.target.value);
    };

    function addUnit() {
        const newUnit: UnitInterface = {
            id: roster.length + 1, // Generate a new ID
            name: 'New Unit',
            move: 4,
            health: 4,
            control: 1,
            save: 3,
            weapons: [],
            keywords: 'Keyword Text'
        };

        const updatedRoster = [...roster, newUnit];
        setRoster(updatedRoster);
        const updatedData = { roster: updatedRoster };
        localStorage.setItem(name, JSON.stringify(updatedData));
        console.log('Unit Added:', newUnit);
    }


    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100vh',
            width: '75vw',
        }}>
            <TextField id="army-name" label="Army Name" variant="standard" value={name} onChange={rename} />
            <Box sx={{ display: 'flex', justifyContent: 'right', alignItems: 'center', marginY: '10px' }}>
                <Button onClick={addUnit} variant='contained' sx={{ bgcolor: 'darkred', '&:hover': { bgcolor: 'grey' } }}>+ Add a Unit</Button>
            </Box>
            <Box sx={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
                <Box sx={{ width: '25%', borderRight: '1px solid black' }}>
                    <h1>Units</h1>
                </Box>
                <Box sx={{ width: '75%' }}>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
                        <h1>Info</h1>
                    </Box>
                </Box>

            </Box>
        </Box>



    );
}

export default RosterPage;
