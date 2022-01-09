import React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './Filter.scss';
import Button from '@mui/material/Button';
import { width } from '@mui/system';

const Filter = (params) => {
    const [apartment, setApartment] = React.useState('');
    const [location, setLocation] = React.useState('');
    const [minBedrooms, setMinBedrooms] = React.useState('');
    const [minBathrooms, setMinBathrooms] = React.useState('');
    const [minPrice, setMinPrice] = React.useState('');
    const [maxPrice, setMaxPrice] = React.useState('');
    const [minSize, setMinSize] = React.useState('');
    // const [minBathrooms, setApartment] = React.useState('');

    const handleChangeApartment = (event) => {
        setApartment(event.target.value);
    };
    const handleChangeLocation = (event, values) => {
        console.log("check12 "+JSON.stringify(values));
        setLocation(values.label);
    };
    const handleChangeMinBedrooms = (event) => {
        setMinBedrooms(event.target.value);
    };
    const handleChangeMinBathrooms = (event) => {
        setMinBathrooms(event.target.value);
    };
    const handleChangeMinPrice = (event) => {
        setMinPrice(event.target.value);
    };
    const handleChangeMaxPrice = (event) => {
        setMaxPrice(event.target.value);
    };
    const handleMinSize = (event) => {
        setMinSize(event.target.value);
    };

    const filterListings = () => {

        let filterData = {
            apartment: apartment,
            location: location,
            minBedrooms: minBedrooms,
            minBathrooms: minBathrooms,
            minPrice: minPrice,
            maxPrice: maxPrice,
            minSize: minSize
        }

        fetch(`http://localhost:4000/getListings`, {
          method: 'POST',
          headers: {
              'Content-type': 'application/json'
          },
          body: JSON.stringify(filterData)
      }).then((response) => response.json())
          .then((data) => {
              console.log("check13 "+JSON.stringify(data))
          }).catch((err) => {
              console.log(err);
              alert("Oops! Something went wrong!");
              // setvariant('danger');
              // alertUser();
          })

    }
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
                        onChange={handleChangeApartment}
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
                    onChange={handleChangeLocation}
                    renderInput={(params) => <TextField {...params} label="Location"/>}
                />
            </div>
            <div className="search-box location">
                <div className="search-title">
                    Price:
                </div>
                <div className="price-block">
                    <div className="price">
                        <TextField type="number" {...params} label="Min ($)" value={minPrice} onChange={handleChangeMinPrice}/>
                    </div>
                    <div className="price">
                        <TextField type="number" {...params} label="Max ($)" value={maxPrice} onChange={handleChangeMaxPrice}/>
                    </div>
                </div>
            </div>
            <div className="search-box location">
                <div className="search-title">
                    Minimum Bedrooms:
                </div>
                <TextField type="number" {...params} label="Minimum Bedrooms" value={minBedrooms} onChange={handleChangeMinBedrooms}/>
            </div>
            <div className="search-box location">
                <div className="search-title">
                    Minimum Bathrooms:
                </div>
                <TextField type="number" {...params} label="Minimum Bathrooms" value={minBathrooms} onChange={handleChangeMinBathrooms}/>
            </div>
            <div className="search-box location">
                <div className="search-title">
                    Minimum Size:
                </div>
                <TextField type="number" {...params} label="Minimum Size (sqft)" value={minSize} onChange={handleMinSize}/>
            </div>

            <div className="buttons">
                <Button variant="contained" style={{ backgroundColor: "#323C5A" }} onClick={filterListings}>Filter</Button>
                <Button variant="contained" style={{ backgroundColor: "#323C5A" }}>Clear</Button>
            </div>
        </div>
    )
}

export default Filter;