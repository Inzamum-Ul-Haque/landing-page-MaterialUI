import { Box } from "@mui/material";
import React from "react";
import CreativeAccordion from "../../../components/CreativeAccordion/CreativeAccordion";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Faq = () => {
  return (
    <Box sx={{ mb: 5 }}>
      <SectionTitle title="Frequently asked" colored="Question" />
      <Box
        sx={{
          mt: 3,
          display: "flex",
          flexDirection: "column",
          gap: 1,
        }}
      >
        <CreativeAccordion />
        <CreativeAccordion />
        <CreativeAccordion />
        <CreativeAccordion />
        <CreativeAccordion />
      </Box>
    </Box>
  );
};

export default Faq;
