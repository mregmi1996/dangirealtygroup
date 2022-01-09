import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './Filter.scss';
import Button from '@mui/material/Button';

const Filter = (params) => {
    const [apartment, setApartment] = React.useState('');

    const handleChange = (event) => {
        setApartment(event.target.value);
    };
    const top100Films = [
        { label: 'Somerville, MA'},
        { label: 'Medford, MA'},
        { label: 'Malden, MA'},
        { label: 'Boston, MA'}
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
                        <MenuItem value={20}>Single Family</MenuItem>
                        <MenuItem value={21}>Multi-Family</MenuItem>
                        <MenuItem value={22}>Condomium/Co-op</MenuItem>
                        <MenuItem value={23}>Land</MenuItem>
                        <MenuItem value={24}>Commercial</MenuItem>
                        <MenuItem value={25}>Business Op</MenuItem>
                        <MenuItem value={26}>Residential Rental</MenuItem>
                        <MenuItem value={27}>Mobile Home</MenuItem>
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
                    options={params.address}
                    sx={{ width: 170 }}
                    renderInput={(params) => <TextField {...params} label="Location" />}
                />
            </div>
            <div className="search-box location">
                <div className="search-title">
                    Minimum Bedrooms:
                </div>
                <TextField {...params} label="Minimum Bedrooms" />
            </div>
            <div className="search-box location">
                <div className="search-title">
                    Minimum Bathrooms:
                </div>
                <TextField {...params} label="Minimum Bathrooms" />
            </div>
            <div className="search-box location">
                <div className="search-title">
                    Minimum Size:
                </div>
                <TextField {...params} label="Minimum Size (sqft)" />
            </div>

            <div className="buttons">
                <Button variant="contained" style={{ backgroundColor: "#323C5A" }}>Filter</Button>
                <Button variant="contained" style={{ backgroundColor: "#323C5A" }}>Clear</Button>
            </div>
        </div>
    )
}

export default Filter;