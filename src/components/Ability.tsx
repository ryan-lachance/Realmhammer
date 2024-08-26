import { Box, Card, CardContent, Typography } from '@mui/material'

function Ability() {

    let phase: string
    let activation: string //any hero phase, your hero phase, etc
    let name: string = "t"
    let cost: string //ritual points, spell value, command points, etc
    let declare: string = "t"
    let effect: string
    let keywords: string

    return (
        <Box width='350px'>
            <Card>
                <CardContent>
                    <Typography align='left' variant='h6'>{name}</Typography>
                    <Typography align='left' variant='body1'>{declare}</Typography>
                </CardContent>
            </Card>
        </Box >
    )
}

export default Ability