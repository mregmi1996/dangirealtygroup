import React, {useEffect} from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import Button from '@mui/material/Button';
import './Searchbox.scss';

const Searchbox = (props) => {
    const [apartment, setApartment] = React.useState('');
    // useEffect(() => {
    //    console.log(props.address) 
    // }, [])
    const handleChange = (event) => {
        setApartment(event.target.value);
    };
    const top100Films = [
        { label: 'Somerville, MA'},
        { label: 'Medford, MA'},
        { label: 'Malden, MA' },
        { label: 'Boston, MA'}
    ]
    return (
        <div className="search-box-container">
            <div className="search-box-container search-params">
                <div className="search-box property-type">
                    <div className="search-title">
                        Property Type:
                    </div>
                    <FormControl sx={{ m: 1, minWidth: 300 }}>
                        <InputLabel id="demo-simple-select-autowidth-label">Apartment Type</InputLabel>
                        <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            value={apartment}
                            onChange={handleChange}
                            minWidth={300}
                            label="Apartment Type">
                            <MenuItem value={20}>Apartments</MenuItem>
                            <MenuItem value={21}>Houses</MenuItem>
                            <MenuItem value={22}>Studios</MenuItem>
                            <MenuItem value={23}>Offices</MenuItem>
                        </Select>
                    </FormControl>
                </div>
                <div className="search-box location">
                    <div className="search-title">
                        Location:
                    </div>
                    <Autocomplete
                        disablePortal
                        id="combo-box-demo"
                        options={props.address}
                        sx={{ width: 300}}
                        renderInput={(params) => <TextField {...params} label="Location" />}
                    />
                </div>
                <div className="search-box price">
                    <div className="search-title">
                        Price:
                    </div>
                    <div className="price-selection-box">
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '100px' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-basic" label="Min Price" variant="outlined" />
                        </Box>
                        
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '100px' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField id="outlined-basic" label="Max Price" variant="outlined" />
                        </Box>
                    </div>
                </div>
            </div>
            <div className="buttons">
                <Button variant="contained" style={{backgroundColor: "#323C5A"}}>Clear</Button>
                <Button variant="contained" style={{backgroundColor: "#323C5A"}}>Search</Button>
            </div>
        </div>
    )
}

export default Searchbox