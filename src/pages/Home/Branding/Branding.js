import { Box, Button, Stack, styled, Typography } from "@mui/material";
import React from "react";

const Branding = () => {
  const BrandingWrapper = styled(Box)(({ theme }) => ({
    height: "70vh",
    backgroundColor: "rgba(122,178,89,0.15)",
    padding: theme.spacing(4),
    margin: "4rem 0",
    clipPath: "polygon(0 0, 100% 0, 100% 85%, 0 100%)",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  }));
  return (
    <BrandingWrapper>
      <Stack spacing={4}>
        <Typography
          sx={{
            fontSize: "2.5rem",
            fontWeight: "bold",
            lineHeight: "1.2",
          }}
        >
          Let's grow your brand <br /> to the next level
        </Typography>
        <Typography sx={{ width: "80%" }}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
          tenetur, molestias eum harum laboriosam fugiat!
        </Typography>
        <Button sx={{ width: "50%" }}>Hire Us</Button>
      </Stack>
      <Box sx={{ width: "60%" }}>
        <img
          src="https://i.ibb.co/sPXVMbC/Frame.png"
          style={{ width: "100%" }}
          alt="branding"
        />
      </Box>
    </BrandingWrapper>
  );
};

export default Branding;
