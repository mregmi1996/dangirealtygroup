import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

const AgentsCard = () => {
    const navigate = useNavigate();
    const viewAgentClickHandler=()=>{
        navigate("/agentDetails")
    }
    return (
        <div>
            <Card sx={{ maxWidth: 500 }}>
                <CardMedia
                    component="img"
                    alt="agent"
                    height="250"
                    image="/static/images/cards/contemplative-reptile.jpg"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        Agent
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Agent Contact
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