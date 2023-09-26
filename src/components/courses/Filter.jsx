"use client";
import {
  Box,
  Button,
  IconButton,
  Input,
  Select,
  Option,
  Sheet,
  Typography,
} from "@mui/joy";
import { useState } from "react";
import useInput from "../../hooks/useInput";
import * as Feather from "react-feather";

import { catagories } from "../../utils/catagories";

const ratings = ["⭐", "⭐⭐", "⭐⭐⭐", "⭐⭐⭐⭐", "⭐⭐⭐⭐⭐"];

export default function Filter({ setQuery, setPage }) {
  const searchInput = useInput("");
  const [catagory, setCatagory] = useState("");
  const minPriceInput = useInput(-1);
  const maxPriceInput = useInput(-1);
  // let [minRating, setMinRating] = useState("1");
  // let [maxRating, setMaxRating] = useState("5");

  function handleSearch() {
    let queries = "";
    let minPrice = Number(minPriceInput.value),
      maxPrice = Number(maxPriceInput.value);
    // (minRating = Number(minRating)), (maxRating = Number(maxRating));
    if (searchInput.value !== "") queries += `title=${searchInput.value}&`;
    if (catagory !== "") queries += `catagory=${catagory}&`;
    if (minPrice <= maxPrice && minPrice > 0 && maxPrice) {
      let query = `price[gte]=${minPrice}&price[lte]=${maxPrice}&`;
      queries += query;
    }
    // if (minRating <= maxRating && minRating > 0 && maxRating) {
    //   let query = `rating[gte]=${minRating}&rating[lte]=${maxRating}&`;
    //   queries += query;
    // }
    setQuery(queries);
    setPage(1);
  }
  return (
    <Sheet
      sx={{
        width: "100%",
        margin: "auto",
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: 1,
        position: "sticky",
        top: 60,
        zIndex: 100,
        transition: "all .2s",
        boxShadow: "lg",

        p: 5,
        border: "1px solid #d6d6d6",
        borderRadius: 20,
      }}
    >
      <Box
        sx={{
          display: "flex",

          justifyContent: "center",
          flexWrap: "wrap",
          gap: 2,
          transition: "height 0.4s",
          overflow: "hidden",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Typography fontSize={14} fontWeight={500}>
            Select Catagories:
          </Typography>
          <Select
            size="sm"
            onChange={(e, val) => {
              setCatagory(val);
            }}
          >
            <Option value={""}>Not selected</Option>
            {catagories.map((c, i) => {
              return (
                <Option value={c.toLocaleLowerCase()} key={i}>
                  {c}
                </Option>
              );
            })}
          </Select>
        </Box>

        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Typography fontSize={14} fontWeight={500}>
            Min Price:
          </Typography>
          <Input
            size="sm"
            value={minPriceInput.value}
            onChange={minPriceInput.onChange}
            type="number"
            placeholder="Min Price"
          />
        </Box>
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Typography fontSize={14} fontWeight={500}>
            Max Price:
          </Typography>
          <Input
            size="sm"
            value={maxPriceInput.value}
            onChange={maxPriceInput.onChange}
            type="number"
            placeholder="Max Price"
          />
        </Box>

        {/* <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Typography fontSize={14} fontWeight={500}>
            Min Rating:
          </Typography>
          <Select
            size="sm"
            onChange={(e, val) => {
              setMinRating(val);
            }}
          >
            {ratings.map((c, i) => {
              return (
                <Option value={c.length} key={i}>
                  {c}
                </Option>
              );
            })}
          </Select>
        </Box> */}
        <Box sx={{ display: "flex", gap: 1, alignItems: "center" }}>
          <Typography fontSize={14} fontWeight={500}>
            Max Rating:
          </Typography>

          <Select
            size="sm"
            onChange={(e, val) => {
              setMaxRating(val);
            }}
          >
            {ratings.map((c, i) => {
              return (
                <Option value={c.length} key={i}>
                  {c}
                </Option>
              );
            })}
          </Select>
        </Box>
      </Box>

      <Input
        size="sm"
        value={searchInput.value}
        onChange={searchInput.onChange}
        type="text"
        placeholder="Search Course Name"
      />
      <Button
        size="md"
        startDecorator={<Feather.Search />}
        onClick={handleSearch}
      >
        Search
      </Button>
    </Sheet>
  );
}
