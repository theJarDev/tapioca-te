'use client'
import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <nav className="bg-white py-2 pl-1 pr-4">
        <div className="flex justify-between items-center">
          <Link href='/'>
            <Image 
              src='/tapioca-logo.svg'
              alt='Logo'
              width={150}
              height={50}
              className='w-36 h-12 object-cover'
            />
          </Link>
          {/* <div className="text-white font-bold text-xl">Mi Sitio</div> */}

          <button onClick={toggleMenu} className="text-black lg:hidden">
            <svg className="h-10 w-10" fill="none" stroke="currentColor" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"></path>
            </svg>
          </button>

          <div className="hidden lg:flex space-x-4">
            <Link href="/" className="text-black">Inicio</Link>
            <Link href="/menu" className="text-black">Menú</Link>
            <Link href="/promociones" className="text-black">Promociones</Link>
            {/* <Link href="/ubicacion" className="text-black">Ubicación</Link>
            <Link href="/contacto" className="text-black">Contacto</Link> */}
          </div>
        </div>

        <div className={`lg:hidden ${isMenuOpen ? 'flex flex-col items-center' : 'hidden'}`}>
          <Link href="/" className="block text-black pt-4">Inicio</Link>
          <Link href="/menu" className="block text-black pt-4">Menú</Link>
          <Link href="/promociones" className="block text-black pt-4">Promociones</Link>
          {/* <Link href="/ubicacion" className="block text-black pt-4">Ubicación</Link>
          <Link href="/contacto" className="block text-black pt-4">Contacto</Link> */}
        </div>
      </nav>
    </header>
  );
};

export default Header;
