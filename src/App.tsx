import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/footer";
import Header from "./components/header";

// --- COMPONENTE DE LA PÁGINA PRINCIPAL ---
const LandingPage = () => {
  return (
    <div className="bg-white">
      {/* 1. SECCIÓN HERO (TOTALMENTE BLANCA) */}
      <section className="py-20 px-6 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-black text-[#0c69ba] mb-6">
          Gestión inteligente para <br />
          <span className="text-[#21b2f6]">tu veterinaria</span>
        </h1>
        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium">
          Optimiza tus procesos con el software líder diseñado para el sector veterinario.
        </p>
        <div className="flex justify-center gap-4">
          <button className="bg-[#fbce0e] text-[#0c69ba] px-10 py-4 rounded-2xl font-black text-lg shadow-lg hover:scale-105 transition-transform">
            ¡EMPEZAR GRATIS!
          </button>
        </div>
      </section>

      {/* 2. NUEVA SECCIÓN: GALERÍA DE LA APP (IMPACTANTE) */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card de Funcionalidad 1 */}
            <div className="group overflow-hidden rounded-3xl border-2 border-gray-100 hover:border-[#21b2f6] transition-all shadow-sm hover:shadow-xl">
              <div className="h-48 bg-slate-100 flex items-center justify-center">
                 <span className="text-[#0c69ba] font-bold">Dashboard de IA</span>
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-bold text-[#0c69ba] text-xl">Historias Clínicas</h3>
                <p className="text-gray-500 text-sm mt-2">Acceso instantáneo a toda la información de tus pacientes.</p>
              </div>
            </div>
            {/* Card de Funcionalidad 2 */}
            <div className="group overflow-hidden rounded-3xl border-2 border-gray-100 hover:border-[#21b2f6] transition-all shadow-sm hover:shadow-xl">
              <div className="h-48 bg-slate-100 flex items-center justify-center">
                 <span className="text-[#0c69ba] font-bold">Ventas e Inventario</span>
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-bold text-[#0c69ba] text-xl">Control de Stock</h3>
                <p className="text-gray-500 text-sm mt-2">Gestiona tus productos y ventas de forma automatizada.</p>
              </div>
            </div>
            {/* Card de Funcionalidad 3 */}
            <div className="group overflow-hidden rounded-3xl border-2 border-gray-100 hover:border-[#21b2f6] transition-all shadow-sm hover:shadow-xl">
              <div className="h-48 bg-slate-100 flex items-center justify-center">
                 <span className="text-[#0c69ba] font-bold">Marketing y CRM</span>
              </div>
              <div className="p-6 bg-white">
                <h3 className="font-bold text-[#0c69ba] text-xl">Fidelización</h3>
                <p className="text-gray-500 text-sm mt-2">Campañas personalizadas para tus clientes frecuentes.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SECCIÓN TESTIMONIOS (DISEÑO BURBUJA) */}
      <section className="py-20 bg-slate-50/50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold text-[#0c69ba] mb-16">
            Qué dicen nuestros <span className="text-[#21b2f6]">usuarios</span>
          </h2>
          <div className="flex flex-wrap justify-center gap-12">
             <div className="max-w-sm flex flex-col items-center">
                <div className="bg-white border-2 border-[#21b2f6]/20 p-8 rounded-[2.5rem] shadow-sm italic text-gray-700 relative mb-8">
                  "Gracias por brindarnos una solución tan practica y útil, nos ayudó a organizar los procesos internos."
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[12px] border-t-[#21b2f6]/20"></div>
                </div>
                <div className="flex items-center gap-3">
                   <div className="w-12 h-12 bg-gray-200 rounded-full"></div>
                   <div className="text-left leading-tight">
                      <p className="font-bold text-[#0c69ba]">Felipe Ceballos</p>
                      <p className="text-xs text-gray-400">Clínica San Lucas</p>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// --- COMPONENTE PRINCIPAL ---
function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header /> 

        {/* MARGEN SUPERIOR CRÍTICO: Asegura que el Header no tape el contenido */}
        <main className="flex-grow mt-[100px]"> 
          <Routes>
            <Route path="/" element={<LandingPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;