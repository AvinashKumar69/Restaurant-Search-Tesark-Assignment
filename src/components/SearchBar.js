import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React from 'react';

const SearchBar = () => {
    return (
        <Box
            sx={{
                width: 500,
                maxWidth: '100%',
            }}
        >
            <TextField fullWidth label="search" id="fullWidth" />
        </Box>
    )
}

export default SearchBar;