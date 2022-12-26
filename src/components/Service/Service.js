import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const Service = ({ image }) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        boxShadow: "none",
        mx: "auto",
        pt: 2,
        "&:hover": {
          boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
        },
      }}
    >
      <CardMedia
        component="img"
        sx={{ height: 140, width: "auto", mx: "auto" }}
        image={image}
      />
      <CardContent
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="div"
          sx={{
            fontWeight: "bold",
          }}
        >
          Web and Mobile Design
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );
};

export default Service;
