import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Efecto para cambiar el estilo al hacer scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-2' : 'bg-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        
        {/* LOGO AREA */}
        <div className="flex items-center gap-12">
          <Link to="/" className="transition-transform hover:scale-105">
            <img src="src/img/logo.png" alt="OkVet" className="h-35 w-auto" />
          </Link>

          {/* NAVIGATION DESKTOP */}
          <nav className="hidden lg:flex items-center gap-8 text-[15px] font-semibold text-slate-700">
            <Link to="/" className="text-cyan-500 relative after:content-[''] after:absolute after:w-full after:h-0.5 after:bg-cyan-500 after:bottom-[-4px] after:left-0">
              Inicio
            </Link>
            
            <div className="group relative flex items-center gap-1 cursor-pointer hover:text-cyan-500 transition-colors">
              <span>Funcionalidades</span>
              <svg className="w-4 h-4 group-hover:rotate-180 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
              </svg>
            </div>

            {/* OKVET PRO BADGE */}
            <Link to="/pro" className="group">
              <div className="bg-slate-900 group-hover:bg-cyan-500 transition-colors text-white px-4 py-1.5 rounded-full text-[13px] font-bold italic flex items-center shadow-lg shadow-slate-200">
                OkVet<span className="text-cyan-400 group-hover:text-white ml-1">Pro</span>
              </div>
            </Link>

            {/* ACADEMY WITH BADGE */}
            <div className="relative group cursor-pointer">
              <span className="absolute -top-4 -right-2 bg-blue-600 text-[9px] text-white px-2 py-0.5 rounded-full font-black animate-pulse">
                NUEVO
              </span>
              <div className="flex items-center gap-2">
                <div className="p-1.5 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                  <img src="/icon-birrete.png" alt="Academy" className="w-6 h-6" />
                </div>
                <div className="flex flex-col leading-none">
                  <span className="text-slate-800 font-bold text-sm italic">OkVet</span>
                  <span className="text-blue-600 font-bold text-sm italic">Academy</span>
                </div>
              </div>
            </div>
            
            <Link to="/planes" className="hover:text-cyan-500 transition-colors">Planes</Link>
          </nav>
        </div>

        {/* ACTION BUTTONS */}
        <div className="hidden lg:flex items-center gap-4">
          <Link 
            to="/registro" 
            className="bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-7 py-2.5 rounded-xl font-bold text-sm transition-all transform hover:-translate-y-0.5 shadow-md shadow-blue-100"
          >
            ¡Empezar GRATIS!
          </Link>
          
          <Link 
            to="/login" 
            className="border-2 border-cyan-400 text-slate-800 px-7 py-2.5 rounded-full font-bold text-sm hover:bg-cyan-50 transition-all active:scale-95"
          >
            Iniciar Sesión
          </Link>
        </div>

        {/* MOBILE TOGGLE */}
        <button className="lg:hidden p-2 text-slate-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* MOBILE MENU */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-t border-slate-100 p-6 flex flex-col gap-4 shadow-xl animate-in slide-in-from-top duration-300">
          <Link to="/" className="text-cyan-500 font-bold">Inicio</Link>
          <Link to="/funcionalidades" className="font-bold">Funcionalidades</Link>
          <Link to="/planes" className="font-bold">Planes</Link>
          <hr className="border-slate-100" />
          <Link to="/login" className="text-center py-3 border-2 border-cyan-400 rounded-full font-bold">Iniciar Sesión</Link>
          <Link to="/registro" className="text-center py-3 bg-blue-600 text-white rounded-xl font-bold">¡Empezar GRATIS!</Link>
        </div>
      )}
    </header>
  );
};

export default Header;