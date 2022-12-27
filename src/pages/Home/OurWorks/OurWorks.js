import { Box } from "@mui/material";
import React, { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const OurWorks = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ my: 5, mb: 10 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <SectionTitle
          title="Here are some of"
          colored="Our Works"
          sx={{ textAlign: "left" }}
        />
        <Box>
          <Tabs
            value={value}
            onChange={handleChange}
            centered
            sx={{
              "& .MuiTabs-indicator": {
                display: "none",
              },
              "& .Mui-selected": {
                color: "primary.green",
                fontWeight: "bold",
              },
              "& .MuiButtonBase-root": {
                textTransform: "capitalize",
              },
            }}
          >
            <Tab label="All" />
            <Tab label="Web Design" />
            <Tab label="Mobile App" />
          </Tabs>
        </Box>
      </Box>
    </Box>
  );
};

export default OurWorks;
