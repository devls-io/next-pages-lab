import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ThemeButton from "@/components/ThemeButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Next.Lab | Experimentos com Next.js",
  description: "Um laboratório prático de Next.js 16, TailwindCSS e Server Components desenvolvido por devls-io",
  
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Header></Header>
        {children}
        <ThemeButton></ThemeButton>
        <Footer></Footer>
      </body>
    </html>
  );
}
