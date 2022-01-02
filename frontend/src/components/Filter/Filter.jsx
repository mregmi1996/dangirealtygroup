import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import FilterToFrom from './FilterToFrom';
import './Filter.scss';
import Button from '@mui/material/Button';

const Filter = (params) => {
    const [apartment, setApartment] = React.useState('');

    const handleChange = (event) => {
        setApartment(event.target.value);
    };
    const top100Films = [
        { label: 'Somerville, MA', state: "Massachussets" },
        { label: 'Medford, MA', state: "Massachussets" },
        { label: 'Malden, MA', state: "Massachussets" },
        { label: 'Boston, MA', state: "Massachussets" }
    ]
    return (
        <div className="filter">
            <h2 className="filter-text">Filter</h2>
            <div className="search-box property-type">
                <div className="search-title">
                    Property Type:
                </div>
                <FormControl sx={{ m: 1, minWidth: 170 }}>
                    <InputLabel id="demo-simple-select-autowidth-label">Apartment Type</InputLabel>
                    <Select
                        labelId="demo-simple-select-autowidth-label"
                        id="demo-simple-select-autowidth"
                        value={apartment}
                        onChange={handleChange}
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
                    options={top100Films}
                    sx={{ width: 170 }}
                    renderInput={(params) => <TextField {...params} label="Location" />}
                />
            </div>
            <FilterToFrom title="Price"/>
            <FilterToFrom title="Bedrooms"/>
            <FilterToFrom title="Bathrooms"/>
            <FilterToFrom title="Property Size(sqft)"/>
            <div className="buttons">
                <Button variant="contained" style={{backgroundColor: "#323C5A"}}>Filter</Button>
                <Button variant="contained" style={{backgroundColor: "#323C5A"}}>Clear</Button>
            </div>
        </div>
    )
}

export default Filter;