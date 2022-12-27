import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, IconButton } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useTheme } from "@mui/material";

const CreativeCard = () => {
  // we can use anything inside this theme if we want
  const theme = useTheme();

  return (
    <Card sx={{ maxWidth: 345, p: 2, borderRadius: "10px", minWidth: "345px" }}>
      <CardMedia
        component="image"
        sx={{ height: 200, borderRadius: "10px" }}
        image="https://i.ibb.co/B3HFL6T/lenovo-ideapad-5-14alc05-amd-ryzen-7-5700u-14-11667195530.webp"
      />
      <CardContent
        sx={{
          p: 0,
          pb: 0,
          pt: 4,
          "&:last-child": {
            pb: 0,
          },
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            gutterBottom
            variant="body"
            component="div"
            color="text.secondary"
          >
            Web Design
          </Typography>
          <Typography
            variant="body2"
            fontWeight={600}
            color="primary.main"
            fontSize={20}
          >
            Web Design Research
          </Typography>
        </Box>
        <IconButton>
          <AddCircleOutlineIcon
            sx={{
              color: `${theme.palette.primary.main}`,
            }}
          />
        </IconButton>
      </CardContent>
    </Card>
  );
};

export default CreativeCard;
