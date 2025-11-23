export default function Auditoria() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col space-y-10">
        <main className="max-w-6xl mx-auto px-6 py-12 flex-1 space-y-10">

      <h1 className="text-3xl font-bold text-blue-900">Auditoría del Proyecto</h1>

      <section className="bg-white p-8 shadow rounded-xl">
        <h2 className="text-2xl font-bold mb-3">Objetivo de la Auditoría</h2>
        <p className="text-gray-700 leading-relaxed">
          Validar que el proyecto cumpla con estándares técnicos, funcionales y académicos,
          verificando documentación, arquitectura, calidad del código y resultados de pruebas.
        </p>
      </section>

      <section className="bg-white p-8 shadow rounded-xl">
        <h2 className="text-2xl font-bold mb-3">Hallazgos</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Estructura limpia y organizada.</li>
          <li>Aplicación correcta del patrón MVC.</li>
          <li>Documentación completa y coherente.</li>
          <li>Interfaces funcionales y responsivas.</li>
        </ul>
      </section>

      <section className="bg-white p-8 shadow rounded-xl">
        <h2 className="text-2xl font-bold mb-3">Plan de Mejora</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Mejorar la automatización de pruebas.</li>
          <li>Agregar logs y monitoreo en backend.</li>
          <li>Optimizar carga de datos.</li>
        </ul>
      </section>

        </main>
    </div>
  );
}
