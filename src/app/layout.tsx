import type { Metadata } from "next";
import "./globals.css";
import { Inter, Bebas_Neue } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"],
    variable: "--font-inter",
  });

  const bebasNeue = Bebas_Neue({
    weight: ["400"],
    subsets: ["latin"],
    variable: "--font-bebas",
  });

export const metadata: Metadata = {
  title: "Dzawil Uqul",
  description: "Dzawil Uqul Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased ${inter.variable} ${bebasNeue.variable}`}>
        <Header />
        <div className="relative">
          <div className="bg-[#d9d0ff] absolute top-[-6rem] right-[11rem] w-[31.25rem] h-[31.25rem] rounded-lg blur-[10rem] sm:w-[68.75rem]"></div>
          <div className="bg-[#ecfff2] absolute top-[-1rem] left-[-35rem] w-[31.25rem] h-[31.25rem] rounded-lg blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        </div>
        <div className="relative">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
