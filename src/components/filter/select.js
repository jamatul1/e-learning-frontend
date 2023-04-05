import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect({
  label = "",
  menus = [],
  value = 0,
  handleSelect = () => {},
}) {
  const [newValue, setNewValue] = React.useState(value);
  const handleChange = (event) => {
    handleSelect(event.target.value);
    setNewValue(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl
        sx={{
          bgcolor: "#fff",
          border: "none",
          ".css-llrb4p-MuiInputBase-root-MuiFilledInput-root-MuiSelect-root": {
            background: "#fff",
          },
        }}
        variant="filled"
        fullWidth
      >
        <InputLabel id="demo-simple-select-label">{label}</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={newValue}
          label="Age"
          onChange={handleChange}
        >
          {menus.map((m, i) => (
            <MenuItem key={i} value={m.value}>
              {m.label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
