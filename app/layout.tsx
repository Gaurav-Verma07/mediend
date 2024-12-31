import "@mantine/core/styles.css";
import React from "react";
import { MantineProvider, ColorSchemeScript } from "@mantine/core";
import { Providers } from "./Providers";
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Providers>
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
        </Providers>
      </body>
    </html>
  );
}
