import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { theme } from "../theme";
import Header from "./components/Header/Header";
import "@mantine/carousel/styles.css";
export const metadata = {
  title: "MediEnd",
  description: "I am using Mantine with Next.js!",
};
import "./global.css";
import AOSContainer from "./components/AOS/AOS";
import Footer from "./components/Footer/Footer";
import GlobalPopup from "./components/GlobalPopup/globalPopup";

export default function RootLayout({ children }: { children: any }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="shortcut icon" href="/logo.png" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <AOSContainer>
          <MantineProvider defaultColorScheme="light" theme={theme}>
            <Header />
            {children}
            <GlobalPopup 
  scrollThreshold={500}  // Show after scrolling 500px
   // Use interval-based triggers
  intervalTime={60000}   // Show every minute
/>
            <Footer/>

          </MantineProvider>
        </AOSContainer>

      </body>
    </html>
  );
}
