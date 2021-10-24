import React from 'react';
import {AppBar, Box, Button,  Toolbar, Typography} from "@mui/material";

const Header = () => {
    return (
        <header>
            <Box sx={{flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar>
                        <Typography variant="h6" component="div" sx={{flexGrow: 1}}>
                            News
                        </Typography>
                        <Button color="inherit">reset everything</Button>
                    </Toolbar>
                </AppBar>
            </Box>
        </header>
    );
};

export default Header;