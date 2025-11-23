import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Practicas from "./pages/Practicas";
import PSP from "./pages/PSP";
import Auditoria from "./pages/Auditoria";
import InformeResultados from "./pages/InformeResultados";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        {/* CONTENIDO PRINCIPAL */}
        <main className="flex-grow">
          <Routes>
            {/* RUTA INICIAL */}
            <Route path="/" element={<Home />} />

            {/* RUTAS DE PÁGINAS */}
            <Route path="/practicas" element={<Practicas />} />
            <Route path="/psp" element={<PSP />} />
            <Route path="/auditoria" element={<Auditoria />} />
            <Route path="/informe" element={<InformeResultados />} />

            {/* RUTA 404 */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
