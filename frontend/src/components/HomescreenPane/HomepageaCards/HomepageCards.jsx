import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const HomepageCards = (props) => {
    return (
        <Card sx={{ maxWidth: 475 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="270"
                    image={props.image}
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        {props.typography}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}
export default HomepageCards;