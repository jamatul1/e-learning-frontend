import Module from "@/components/module";
import { ModuleProvider } from "@/contexts/moduleContext/moduleContext";
import { Box } from "@mui/material";
import { useRouter } from "next/router";

const ModulePage = () => {
  const router = useRouter();
  const { mid } = router.query;

  return (
    <ModuleProvider>
      <Box
        sx={{
          height: "100vh",
          width: "100vw",
          overflow: "scroll",
          position: "fixed",
          backgroundImage: "url('/imgs/backgrounds/bg-1.jpg')",
        }}
      >
        <Module id={mid} />
      </Box>
    </ModuleProvider>
  );
};

export default ModulePage;
