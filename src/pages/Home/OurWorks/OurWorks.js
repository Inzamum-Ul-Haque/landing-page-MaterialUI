import { Box, IconButton } from "@mui/material";
import React, { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import CreativeCard from "../../../components/CreativeCard/CreativeCard";

const OurWorks = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ my: 5, mb: 10 }}>
      {/* heading section */}
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
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: 2,
          }}
        >
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
          <Box>
            <IconButton
              sx={{
                border: "1px solid #959EAD",
                mr: 2,
              }}
              onClick={() => setValue(value - 1)}
              disabled={value === 0}
            >
              <ArrowBackIcon />
            </IconButton>
            <IconButton
              sx={{
                border: "1px solid #959EAD",
              }}
              onClick={() => setValue(value + 1)}
              disabled={value === 2}
            >
              <ArrowBackIcon
                sx={{
                  transform: "rotate(180deg)",
                }}
              />
            </IconButton>
          </Box>
        </Box>
      </Box>

      {/* card section */}

      <CreativeCard />
    </Box>
  );
};

export default OurWorks;
