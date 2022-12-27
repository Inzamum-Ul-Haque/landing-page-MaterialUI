import { Box, Grid } from "@mui/material";
import React from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Service from "../../../components/Service/Service";

const serviceImages = [
  "https://i.ibb.co/HNhykGp/iphone-1.png",
  "https://i.ibb.co/r0gHkvm/color-palette-1.png",
  "https://i.ibb.co/CvQwzKC/coding-1.png",
];

const Services = () => {
  return (
    <Box>
      <SectionTitle title="Provide Awesome" colored="Services" />
      <Grid container spacing={2}>
        {serviceImages.map((image, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Service key={index} image={image} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;
