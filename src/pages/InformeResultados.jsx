import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import informeData from "../data/informeData";

function SectionTitle({ children }) {
  return <h2 className="text-2xl font-semibold text-blue-700 mb-3">{children}</h2>;
}

function SmallNote({ children }) {
  return <p className="text-sm text-slate-600 mb-3">{children}</p>;
}

export default function InformeResultados() {
  const doc = informeData;

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <main className="max-w-6xl mx-auto px-6 py-12 flex-1">
        {/* Portada */}
        <header className="bg-white p-6 rounded-xl shadow mb-8">
          <h1 className="text-3xl font-bold mb-1">Informe de Resultados del Comportamiento del Software</h1>
          <div className="text-sm text-slate-600 mb-2">Proyecto: <strong>BancoDemo</strong></div>
          <div className="text-sm text-slate-600">Autor: <strong>{doc.autor}</strong> · Fecha: <strong>{doc.fecha}</strong></div>
        </header>

        {/* Introducción */}
        <section className="mb-8">
          <SectionTitle>Introducción</SectionTitle>
          <p className="text-slate-700 leading-relaxed">{doc.introduccion}</p>
        </section>

        {/* Recursos */}
        <section className="mb-8">
          <SectionTitle>1. Recursos utilizados para la evaluación</SectionTitle>

          <div className="grid md:grid-cols-2 gap-6">
            <article className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Equipo evaluador</h3>
              <ul className="list-disc ml-5 text-slate-700">
                {doc.recursos.equipo.map((e, i) => <li key={i}>{e}</li>)}
              </ul>
            </article>

            <article className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Métricas utilizadas</h3>
              <ul className="list-disc ml-5 text-slate-700">
                {doc.recursos.metricas.map((m, i) => <li key={i}>{m}</li>)}
              </ul>
            </article>

            <article className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Ponderación</h3>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-blue-50 text-slate-600"><th className="p-2 border">Criterio</th><th className="p-2 border">Peso</th><th className="p-2 border">Justificación</th></tr>
                </thead>
                <tbody>
                  {doc.recursos.ponderacion.map((row, i) => (
                    <tr key={i} className="border-t">
                      <td className="p-2">{row.criterio}</td>
                      <td className="p-2">{row.peso}</td>
                      <td className="p-2">{row.justificacion}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </article>

            <article className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Fidelidades y criterios</h3>
              <p className="text-slate-700"><strong>Fidelidades de medición:</strong> {doc.recursos.fidelidad}</p>
              <p className="text-slate-700 mt-2"><strong>Criterios de aprobación:</strong> {doc.recursos.criterios}</p>
            </article>

            <article className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Recursos de infraestructura</h3>
              <ul className="list-disc ml-5 text-slate-700">
                {doc.recursos.infra.map((r,i)=> <li key={i}>{r}</li>)}
              </ul>
            </article>

            <article className="bg-white p-4 rounded-lg shadow-sm">
              <h3 className="font-semibold mb-2">Tipos de pruebas aplicadas</h3>
              <ul className="list-disc ml-5 text-slate-700">
                {doc.tipos.map((t,i)=> <li key={i}>{t}</li>)}
              </ul>
            </article>
          </div>
        </section>

        {/* Resultados */}
        <section className="mb-8">
          <SectionTitle>3. Resultados de las pruebas</SectionTitle>

          <div className="bg-white p-4 rounded-lg shadow-sm">
            <h4 className="font-semibold mb-2">Resumen por tipo</h4>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-blue-50 text-slate-600">
                  <th className="p-2 border">Tipo de Prueba</th>
                  <th className="p-2 border">Estado</th>
                  <th className="p-2 border">Observaciones</th>
                </tr>
              </thead>
              <tbody>
                {doc.resultados.resumen.map((r,i)=>(
                  <tr key={i} className="border-t">
                    <td className="p-2">{r.tipo}</td>
                    <td className="p-2">{r.estado}</td>
                    <td className="p-2">{r.obs}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="mt-4">
              <h4 className="font-semibold">Hallazgos relevantes</h4>
              <ul className="list-disc ml-5 text-slate-700">
                {doc.resultados.hallazgos.map((h,i)=> <li key={i}>{h}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* Bitácora / Lecciones */}
        <section className="mb-8">
          <SectionTitle>4. Bitácora de lecciones aprendidas</SectionTitle>
          <ul className="list-disc ml-5 text-slate-700">
            {doc.bitacora.map((b,i)=> <li key={i}>{b}</li>)}
          </ul>
        </section>

        {/* Conclusiones */}
        <section className="mb-8">
          <SectionTitle>Conclusiones</SectionTitle>
          <p className="text-slate-700 leading-relaxed">{doc.conclusion}</p>
        </section>
      </main>
    </div>
  );
}