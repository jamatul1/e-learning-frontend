import { Slider } from "@mui/material";
import { Box, Typography } from "@mui/material";
import { useState } from "react";

export default function PriceSlider() {
  const [priceRange, setPriceRange] = useState([100, 500]);

  const handleChange = (event, newValue) => {
    setPriceRange(newValue);
  };

  const formatPrice = (value) => `$${value}`;

  return (
    <Box sx={{ width: 300 }}>
      <Typography id="price-range-slider" gutterBottom>
        Price Range
      </Typography>
      <Slider
        value={priceRange}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={0}
        max={1000}
        step={10}
        getAriaLabel={(index) =>
          index === 0 ? "Minimum price" : "Maximum price"
        }
        getAriaValueText={formatPrice}
      />
    </Box>
  );
}
