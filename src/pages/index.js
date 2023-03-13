import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useEffect } from "react";
import { useTheme } from "@mui/material";
import AlertDialog from "@/components/alert";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  let theme = useTheme();
  console.log(theme.palette);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <AlertDialog></AlertDialog>
        </div>
      </main>
    </>
  );
}
