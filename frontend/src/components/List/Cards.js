import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function MediaCard({ el }) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      {/*<CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
  />*/}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {el.courses}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Former par : {el.former} <br />
          Email : {el.email}
        </Typography>
      </CardContent>
      <CardActions>
        <h1>Prix : {el.ammount}</h1>
      </CardActions>
      <CardActions >
      <Button size="small" color="error" variant="outlined" >
        Postuler
      </Button>
      </CardActions>
      
    </Card>
  );
}
