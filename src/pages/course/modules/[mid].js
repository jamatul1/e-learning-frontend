import Module from "@/components/module";
import { ModuleProvider } from "@/contexts/moduleContext/moduleContext";
import { useRouter } from "next/router";

const ModulePage = () => {
  const router = useRouter();
  const { mid } = router.query;

  return (
    <ModuleProvider>
      <Module id={mid} />
    </ModuleProvider>
  );
};

export default ModulePage;
