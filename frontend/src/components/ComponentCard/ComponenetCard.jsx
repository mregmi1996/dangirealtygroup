import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const ComponentCard=(props)=> {


  return (
    <Card sx={{ minWidth: 500 }} onClick={props.clickHandler}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="240"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="listing"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.properties.Address}
          </Typography>
          <Typography variant="h5" color="text.secondary">
            {props.properties.Price}         {props.properties.PropertyType}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default ComponentCard;
