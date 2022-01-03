import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const FilterToFrom = (props) =>{
    return(
        <div>
            <div className="search-box price">
                <div className="search-title">
                    {props.title}:
                </div>
                <div className="price-selection-box">
                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '70px' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Min" variant="outlined" />
                    </Box>

                    <Box
                        component="form"
                        sx={{
                            '& > :not(style)': { m: 1, width: '70px' },
                        }}
                        noValidate
                        autoComplete="off"
                    >
                        <TextField id="outlined-basic" label="Max" variant="outlined" />
                    </Box>
                </div>
            </div>
        </div>
    )
}

export default FilterToFrom;