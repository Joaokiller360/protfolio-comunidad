import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/app/components/";

export const metadata: Metadata = {
  title: "Portafolio",
  description: "Create Portafoli By JB",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="!scroll-smooth">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
