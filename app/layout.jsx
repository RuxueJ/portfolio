import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Description } from "@radix-ui/react-dialog";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";
import SlideTransition from "@/components/SlideTransition";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "Create Next App",
  Description: "Generate by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetbrainsMono.variable}>
        <Header />

        {/* <SlideTransition> {children}</SlideTransition> */}

        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
