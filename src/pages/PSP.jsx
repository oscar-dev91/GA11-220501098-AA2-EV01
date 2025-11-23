export default function PSP() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col space-y-8">

      <h1 className="text-3xl font-bold text-blue-900">Modelo PSP</h1>

      <section className="bg-white p-8 shadow rounded-xl">
        <h2 className="text-2xl font-bold mb-3">Introducción al PSP</h2>
        <p className="text-gray-700 leading-relaxed">
          El Personal Software Process (PSP) es una metodología enfocada en la autorregulación,
          medición y mejora continua del desempeño personal en proyectos de software. Se aplicó para
          garantizar calidad, tiempos óptimos y registro detallado del proceso.
        </p>
      </section>

      <section className="bg-white p-8 shadow rounded-xl">
        <h2 className="text-2xl font-bold mb-3">Aplicación en el Proyecto</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Registro de tiempos de desarrollo.</li>
          <li>Diagrama de flujo del proceso personal.</li>
          <li>Registro de defectos encontrados.</li>
          <li>Análisis de métricas y mejora continua.</li>
        </ul>
      </section>

      <section className="bg-white p-8 shadow rounded-xl">
        <h2 className="text-2xl font-bold mb-3">Resultados</h2>
        <p className="text-gray-700">
          Se evidenció una mejora en estimaciones, control del tiempo y reducción de defectos en
          etapas tempranas del desarrollo.
        </p>
      </section>

    </div>
  );
}
