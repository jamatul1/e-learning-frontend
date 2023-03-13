import * as React from "react";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";
import Button from "@mui/material/Button";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { Typography } from "@mui/material";

export default function ProgressBtn({
  startLabel,
  endLabel,
  onClick,
  lessonId,
  initialSuccess = false,
}) {
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(initialSuccess);
  const timer = React.useRef();

  React.useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        onClick(lessonId);
        setLoading(false);
      }, 2000);
    }
  };

  return (
    <Box sx={{ m: 1, position: "relative" }}>
      <Button
        variant="outlined"
        disabled={loading || success}
        onClick={handleButtonClick}
      >
        {!success && startLabel}
        {success && <CheckCircleIcon color="success" sx={{ mr: 1 }} />}
        {success && <Typography sx={{ color: "white" }}>{endLabel}</Typography>}
      </Button>
      {loading && (
        <CircularProgress
          size={24}
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            marginTop: "-12px",
            marginLeft: "-12px",
          }}
        />
      )}
      {}
    </Box>
  );
}