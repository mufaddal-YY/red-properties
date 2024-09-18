import "./globals.css";
import { Poppins } from "next/font/google";
import ProgressBars from "@/components/Nav/ProgressBar";
import { Suspense } from "react";
import { Toaster } from "sonner";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Header from "@/components/Nav/Header";
import Footer from "@/components/Nav/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      
      <body className={poppins.className}>
        
        <Header />
        <main>
          {children}
          <Toaster closeButton position="top-right" richColors />
        </main>
        <Footer />
        <Suspense>
          <ProgressBars />
        </Suspense>
      </body>
    </html>
  );
}
