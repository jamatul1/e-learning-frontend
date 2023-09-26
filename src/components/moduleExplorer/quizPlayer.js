import {
  Box,
  Button,
  Input,
  Modal,
  ModalClose,
  Sheet,
  Typography,
} from "@mui/joy";
import React, { useState } from "react";
import QuizTest from "./QuizTest";
import { Zap } from "react-feather";

export default function QuizPlayer({ item, student = true }) {
  let [result, setResult] = useState({});
  let [showRes, setShowRes] = useState(false);
  return (
    <Box sx={{ p: 5 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {" "}
        <Box>
          <Typography fontWeight={500} level="h3">
            {item?.title}
          </Typography>
        </Box>
      </Box>

      <Box sx={{ width: "90%" }}>
        <Typography width={"100%"} lavel="body" sx={{ my: 2 }}>
          {item.description}
        </Typography>
      </Box>
      {student && (
        <Typography sx={{ mb: 1 }}>
          {item?.status?.status?.currentStatus}
        </Typography>
      )}

      <Box sx={{ mt: 2 }}>
        <QuizTest
          result={result}
          setResult={setResult}
          questions={item?.questions}
          setShowResult={setShowRes}
        />
      </Box>
      <Box>
        <ShowResult
          open={showRes}
          setOpen={setShowRes}
          succed={result?.score}
          totals={item?.questions.length}
        ></ShowResult>
      </Box>
    </Box>
  );
}

export function ShowResult({ totals, succed, open, setOpen }) {
  return (
    <React.Fragment>
      <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        onClose={() => setOpen(false)}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: "md",
            p: 3,
            boxShadow: "lg",
            display: "flex",
            flexDirection: "column",
            gap: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: "calc(-1/4 * var(--IconButton-size))",
              right: "calc(-1/4 * var(--IconButton-size))",
              boxShadow: "0 2px 12px 0 rgba(0 0 0 / 0.2)",
              borderRadius: "50%",
              bgcolor: "background.surface",
            }}
          />
          <Zap size={"80"} />
          <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
            <Typography
              component="h2"
              id="modal-title"
              level="h4"
              textColor="inherit"
              fontWeight="lg"
            >
              Your Quiz Test Result
            </Typography>
            <Typography textColor="text.tertiary">
              Total solved : {succed} Out of {totals}
            </Typography>
          </Box>
        </Sheet>
      </Modal>
    </React.Fragment>
  );
}
