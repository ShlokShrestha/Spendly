import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Spendly",
  description:
    "Spendly is a simple balance tracker. You add money to your balance, and every expense reduces from it. It also supports group usage.  ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable}  antialiased`}>
        {children}
        <ToastContainer autoClose={700} />
      </body>
    </html>
  );
}
