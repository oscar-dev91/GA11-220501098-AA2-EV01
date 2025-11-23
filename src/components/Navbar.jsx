import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="bg-blue-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold">Proyecto de Prácticas</h1>

        <div className="flex gap-6 text-sm font-medium">
          <Link to="/" className="hover:text-blue-300">Inicio</Link>
          <Link to="/practicas" className="hover:text-blue-300">Prácticas</Link>
          <Link to="/psp" className="hover:text-blue-300">PSP</Link>
          <Link to="/auditoria" className="hover:text-blue-300">Auditoría</Link>
          <Link to="/informe" className="hover:text-blue-300">Informe</Link>
        </div>
      </div>
    </nav>
  );
}
