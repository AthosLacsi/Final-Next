import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/layouts/navbar/navbar";
import Footer from "./components/layouts/footer/footer";

// Configuración de las fuentes personalizadas
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Metadatos adaptados para Farmacia Veracierto
export const metadata = {
  title: "MichiMundo | Todo para tu gato en un solo lugar",
  description:
    "MichiMundo te ofrece los mejores alimentos, juguetes y accesorios para el bienestar de tu gato. Descubre nuestra tienda online y consiente a tu michi.",
  keywords: "gatos, alimento para gatos, juguetes para gatos, accesorios para gatos, tienda para gatos, michimundo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main style={{ minHeight: "80vh", padding: "2rem" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
