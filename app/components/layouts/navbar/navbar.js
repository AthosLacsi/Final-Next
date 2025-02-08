import Image from "next/image";
import Menu from "./menu";

export const metadata = {
  title: "MichiMundo | La mejor tienda para tu gato",
  description: "MichiMundo ofrece alimentos, juguetes y accesorios de calidad para el bienestar y felicidad de tu gato. Compra online y consiente a tu michi.",
  keywords: "gatos, comida para gatos, juguetes para gatos, accesorios para gatos, tienda online, michimundo, rascadores, snacks para gatos",
};

const Navbar = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-4 py-2">
        <div className="flex items-center justify-between">
          {/* Imagen del logo */}
          <Image
            src="/images/logo michi.jpg" // Ruta correcta de la imagen
            alt="Logo de la tienda"
            width={100}
            height={100}
            className="object-contain"
            priority // Optimización de carga de imagen
          />
          {/* Menú */}
          <Menu />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
