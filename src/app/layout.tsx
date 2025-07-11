"use client";
import "react-toastify/dist/ReactToastify.css";
import { usePathname } from "next/navigation";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "animate.css";
import "@ant-design/v5-patch-for-react-19";

import "./globals.css";
import Header from "@/component/Header";
import Footer from "@/component/Footer";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { ToastContainer } from "react-toastify";

config.autoAddCss = false;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  console.log("Current pathname:", pathname);
  return (
    <html lang="en">
      <body>
        {pathname === "/" ? (
          <>{children}</>
        ) : (
          <>
            <Header />
            {children}
            <ToastContainer />
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
