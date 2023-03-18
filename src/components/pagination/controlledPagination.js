import * as React from "react";
import Typography from "@mui/material/Typography";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export default function PaginationControlled({
  page = 1,
  totalPage = 1,
  handlePageChange = () => {},
}) {
  const handleChange = (event, value) => {
    handlePageChange(value);
  };

  return (
    <Stack spacing={2}>
      <Pagination
        size="large"
        shape="rounded"
        count={totalPage}
        page={page}
        onChange={handleChange}
      />
    </Stack>
  );
}
