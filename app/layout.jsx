import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Description } from "@radix-ui/react-dialog";
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";

import Providers from "./provider";

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
    <html lang="en" suppressHydrationWarning>
      <body className={jetbrainsMono.variable}>
        <Providers attribute="class">
          <div className="min-h-screen bg-background text-foreground">
            <Header />

            <PageTransition>{children}</PageTransition>
          </div>
        </Providers>
      </body>
    </html>
  );
}
