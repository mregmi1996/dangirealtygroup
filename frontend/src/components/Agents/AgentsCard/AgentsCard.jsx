import React, { useState, useEffect } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { actionTypes } from '../../../reducers/realtor';
import configuration from '../../../config';

const AgentsCard = ({realtor}) => {
    const [image, setImage] = useState()
    useEffect(() => {setImage(`${configuration.URL}/file/${realtor.image}/`)}, [])
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const viewAgentClickHandler=()=>{
        dispatch({
            type: actionTypes.UPDATE_SELECTED_REALTOR,
            name: realtor.name,
            email_id: realtor.email_id,
            phone: realtor.phone,
            description: realtor.description,
            image: realtor.image
        })
        navigate("/agentDetails")
    }
    return (
        <div>
            <Card sx={{ maxWidth: 500 }}>
                <CardMedia
                    component="img"
                    alt="agent"
                    height="450"
                    image={image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {realtor.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {realtor.email_id} <br/>
                        {realtor.phone}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="large" onClick={viewAgentClickHandler}>View</Button>
                    <Button size="large"><a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=someone@gmail.com" target="_blank">Contact Now</a></Button>
                </CardActions>
            </Card>
        </div>
    )
}


export default AgentsCard;