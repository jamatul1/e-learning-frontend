import * as React from "react";
import Box from "@mui/joy/Box";
import Button from "@mui/joy/Button";
import IconButton, { iconButtonClasses } from "@mui/joy/IconButton";
import Typography from "@mui/joy/Typography";
import * as Feather from "react-feather";

export default function Pagination({ currentPage, setPage, totalPages }) {
  return (
    <div>
      <Box
        className="Pagination-mobile"
        sx={{ display: { xs: "flex", md: "none" }, alignItems: "center" }}
      >
        <IconButton
          aria-label="previous page"
          variant="outlined"
          color="neutral"
          size="sm"
          onClick={() => {
            if (currentPage > 1) setPage(currentPage + 1);
            else setPage(totalPages);
          }}
        >
          <Feather.ArrowLeft />
        </IconButton>
        <Typography level="body-sm" mx="auto">
          Page {currentPage} of {totalPages}
        </Typography>
        <IconButton
          aria-label="next page"
          variant="outlined"
          color="neutral"
          size="sm"
          onClick={() => {
            if (currentPage < totalPages) setPage(currentPage + 1);
            else setPage(1);
          }}
        >
          <Feather.ArrowRight />
        </IconButton>
      </Box>
      <Box
        className="Pagination-laptopUp"
        sx={{
          pt: 0.5,
          gap: 1,
          [`& .${iconButtonClasses.root}`]: { borderRadius: "50%" },
          display: {
            xs: "none",
            md: "flex",
          },
        }}
      >
        <Button
          size="sm"
          variant="plain"
          color="neutral"
          startDecorator={<Feather.ArrowLeft />}
          onClick={() => {
            if (currentPage > 1) setPage(currentPage - 1);
            else setPage(totalPages);
          }}
        >
          Previous
        </Button>

        <Box sx={{ flex: 1 }} />
        {Array(totalPages)
          .fill(0)
          .map((val, idx) => (
            <IconButton
              key={idx}
              size="sm"
              variant={Number(idx) + 1 === currentPage ? "outlined" : "plain"}
              color="neutral"
              onClick={() => setPage(idx + 1)}
            >
              {idx + 1}
            </IconButton>
          ))}
        <Box sx={{ flex: 1 }} />

        <Button
          size="sm"
          variant="plain"
          color="neutral"
          endDecorator={<Feather.ArrowRight />}
          onClick={() => {
            if (currentPage < totalPages) setPage(currentPage + 1);
            else setPage(1);
          }}
        >
          Next
        </Button>
      </Box>
    </div>
  );
}
