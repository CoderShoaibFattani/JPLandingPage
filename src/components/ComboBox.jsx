import { useState } from "react";
import { Autocomplete, TextField, Paper } from "@mui/material";

export default function ComboBox() {
  const [open, setOpen] = useState(false);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={trainings}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      sx={{
        width: 180,
        height: "62px",
      }}
      PaperComponent={({ children }) => (
        <Paper
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        >
          {children}
        </Paper>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Trainings"
          sx={{ fontSize: "24px" }}
          onMouseEnter={() => setOpen(true)}
          onMouseLeave={() => setOpen(false)}
        />
      )}
      renderOption={(props, option) => (
        <li
          {...props}
          style={{
            "&:hover": {
              backgroundColor: "black",
            },
          }}
        >
          {option.label}
        </li>
      )}
    />
  );
}

const trainings = [
  { label: "Web and Mobile Application Development" },
  { label: "Flutter Application Development" },
  { label: "Graphics Design and Video Editing" },
  { label: "Digital and Social Media Marketing" },
  { label: "Blockchain Development" },
];
