import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
// import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CustomExpandIcon = () => {
  return (
    <div>
      <div className="expandMoreIcon">
        <AddIcon />
      </div>
      <div className="removeExpandIcon">
        <RemoveIcon />
      </div>
    </div>
  );
};

const CreativeAccordion = () => {
  return (
    <Accordion
      sx={{
        boxShadow: "none",
        border: "1px solid #E5EAF4",
        p: 2,
        "& .Mui-expanded": {
          "& .expandMoreIcon": {
            display: "none",
          },
          "& .removeExpandIcon": {
            display: "block",
            "& svg": {
              color: "primary.green",
            },
          },
        },
      }}
    >
      <AccordionSummary
        expandIcon={<CustomExpandIcon />}
        aria-controls="panel1a-content"
        id="panel1a-header"
        sx={{
          "& .removeExpandIcon": {
            display: "none",
          },
          "& p": {
            color: "primary.main",
            fontWeight: "bold",
          },
          "& .Mui-expanded": {
            "& p": {
              color: "primary.green",
              fontWeight: "bold",
            },
          },
        }}
      >
        <Typography>Accordion 1</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography
          sx={{
            color: "#5A7184",
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
};

export default CreativeAccordion;
