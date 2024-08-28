import { Box, Card, CardContent, Typography } from '@mui/material';

interface AbilityProps {
    name: string;
    declare: string;
    phase: string;
    activation: string;
    cost: string;
    effect: string;
    keywords: string;
}

function Ability({ name, declare, phase, activation, cost, effect, keywords }: AbilityProps) {

    function getTitleBarColor(phase: string) {
        switch (phase) {
            case 'Deployment': return 'darkgreen'
            case 'Start': return 'black'
            case 'Hero': return 'gold'
            case 'Movement': return 'grey'
            case 'Shooting': return 'darkblue'
            case 'Charge': return 'darkorange'
            case 'Combat': return 'darkred'
            case 'End': return 'purple'
            default: return 'black'

        }
    }

    let nameColor: string = 'white'
    let nameBarColor: string = getTitleBarColor(phase)
    return (
        <Box width='25%' minWidth='280px'>
            <Card sx={{ height: '100%' }}>
                <CardContent>

                    <Typography align='left' variant='h6' fontWeight="bold" bgcolor={nameBarColor} color={nameColor}>{name}</Typography>
                    {activation && (
                        <Typography align='left' variant='body1' fontWeight={'bold'}>
                            {activation}
                        </Typography>
                    )}
                    {cost && (
                        <Typography align='left' variant='body2'>
                            <Typography component="span" variant="body2" fontWeight="bold">Cost:</Typography> {cost}
                        </Typography>
                    )}
                    {declare && (
                        <Typography align='left' variant='body2'>
                            <Typography component="span" variant="body2" fontWeight="bold">Declare:</Typography> {declare}
                        </Typography>
                    )}

                    {effect && (
                        <Typography align='left' variant='body2'>
                            <Typography component="span" variant="body2" fontWeight="bold">Effect:</Typography> {effect}
                        </Typography>
                    )}

                    {keywords && (
                        <Typography align='left' variant='body2'>
                            <Typography component="span" variant="body2" fontWeight="bold">Keywords:</Typography> {keywords}
                        </Typography>
                    )}


                </CardContent>
            </Card>
        </Box>
    );
}

export default Ability;
