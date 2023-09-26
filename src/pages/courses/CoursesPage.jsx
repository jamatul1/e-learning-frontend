import { useState } from "react";

import {
  Divider,
  Sheet,
  Box,
  CircularProgress,
  Typography,
  Button,
  Grid,
} from "@mui/joy";
import Filter from "../../components/courses/Filter";
import { useGetCoursesQuery } from "../../redux/services/courses/courses";
import CourseCard from "../../components/courses/CourseCard";
import Pagination from "../../components/paginate";
import { useCreateCourseProgressMutation } from "../../redux/services/progress/progress";
export default function CoursesPage() {
  let [query, setQuery] = useState("");
  let [page, setPage] = useState(1);
  let [limit, setLimit] = useState(100);
  let { data, error, isLoading } = useGetCoursesQuery(
    `?${query}page=${page}&limit=${limit}`
  );

  return (
    <Sheet sx={{ minHeight: "90vh" }}>
      <Box sx={{ width: "94%", margin: "auto" }}>
        <Grid spacing={3} container>
          <Grid xs={3}>
            <Filter setQuery={setQuery} setPage={setPage} />
          </Grid>
          <Grid xs={9}>
            <Box
              sx={{
                border: "1px solid #d6d6d6",
                boxShadow: "lg",
                p: 4,
                borderRadius: 30,
              }}
            >
              <Sheet sx={{ py: 3, display: "flex", justifyContent: "center" }}>
                <Typography fontWeight={500} level="h3">
                  Your search Result
                </Typography>
              </Sheet>

              <Sheet
                sx={{
                  display: "flex",
                  gap: 2,
                  flexWrap: "wrap",
                  width: "100%",
                  minHeight: "20vh",
                  alignItems: "center",
                  mb: 4,
                }}
              >
                {data?.data.map((c) => (
                  <div key={c._id}>
                    <CourseCard key={c._id} course={c}></CourseCard>
                  </div>
                ))}
                {/* {loading && <CircularProgress size="md" />} */}
              </Sheet>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Sheet>
  );
}
