import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/NavBar";
import "./globals.css";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jessica Rovetto | Concejal de Córdoba",
  description: "Sitio oficial de Jessica Rovetto, concejal de la ciudad de Córdoba.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />

        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
