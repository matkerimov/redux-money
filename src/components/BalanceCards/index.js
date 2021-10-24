import React from 'react';
import {Card, CardContent, Grid, Typography} from "@mui/material";

const BalanceCards = () => {


    return (
        <Grid container spacing={4}>
            <Grid item xs={4}>
                <Card sx={{minWidth: 275}}>
                    <CardContent sx={{ bgcolor: '#28db15', color: 'white' }}>
                        <Typography sx={{fontSize: 14}}  gutterBottom>
                            Text 1
                        </Typography>
                        <Typography variant="h5" component="div">
                            Text 2
                        </Typography>
                    </CardContent>

                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{minWidth: 275}}>
                    <CardContent sx={{ bgcolor: '#f10d0d', color: 'white' }} >
                        <Typography sx={{fontSize: 14}}  gutterBottom>
                            Text 1
                        </Typography>
                        <Typography variant="h5" component="div">
                            Text 2
                        </Typography>
                    </CardContent>

                </Card>
            </Grid>
            <Grid item xs={4}>
                <Card sx={{minWidth: 275}}>
                    <CardContent sx={{ bgcolor: '#ffc107', color: 'white' }} >
                        <Typography sx={{fontSize: 14}}  gutterBottom>
                            Text 1
                        </Typography>
                        <Typography variant="h5" component="div">
                            Text 2
                        </Typography>
                    </CardContent>

                </Card>
            </Grid>
        </Grid>
    );
};

export default BalanceCards;