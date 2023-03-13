import Layout from "@/components/layouts/layout";
import "@/styles/globals.css";
import createEmotionCache from "@/utils/createEmotionCache";
import { theme } from "@/utils/theme";
import { CacheProvider } from "@emotion/react";
import { ThemeProvider } from "@mui/material";

const clientSideEmotionCache = createEmotionCache();

export default function App({
  Component,
  emotionCache = clientSideEmotionCache,
  pageProps,
}) {
  return (
    <CacheProvider value={emotionCache}>
      <ThemeProvider theme={theme}>
        <Layout>
          <Component {...pageProps}></Component>
        </Layout>
      </ThemeProvider>
    </CacheProvider>
  );
}
