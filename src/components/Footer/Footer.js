import { Box, Button, Container, Divider, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        bgcolor: "primary.main",
        py: 8,
      }}
    >
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            sx={{
              fontSize: "1.5rem",
              color: "#fff",
              flex: 1,
            }}
          >
            Creative Agency
          </Typography>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography
              sx={{
                color: "rgba(255,255,255, 0.5)",
              }}
            >
              Creative Agency
            </Typography>
          </Box>
          <Button
            sx={{
              bgcolor: "primary.green",
              "&:hover": {
                bgcolor: "primary.green",
              },
              ml: 2,
            }}
          >
            Get Started
          </Button>
        </Box>
        <Divider
          sx={{
            bgcolor: "rgba(255,255,255,0.5)",
            mt: 3,
          }}
        />
      </Container>
    </Box>
  );
};

export default Footer;
