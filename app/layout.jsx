import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/ui/Header";
import PageTransition from "@/components/ui/PageTransition";
import StairTransition from "@/components/ui/StairTransition";

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-jetbrainsMono",
});

export const metadata = {
  title: "DevFolio",
  description: "Created by Harsh Masaye",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={jetBrainsMono.className}>
        <Header />
        {/* <StairTransition /> */}
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
