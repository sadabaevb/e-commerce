import { Montserrat } from "next/font/google";
import "./globals.css";
import HeaderDesktop from "@/components/Header/HeaderDesktop";
import Header from "@/components/Header/Header";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});

export const metadata = {
  title: "Inspire - Your Style",
  description: "Create the best version of yourself",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Header />
        
        {children}
      </body>
    </html>
  );
}
