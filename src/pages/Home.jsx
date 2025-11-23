export default function Home() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 flex-1 space-y-8">

      <section className="bg-white shadow-md p-8 rounded-xl">
        <h2 className="text-3xl font-bold text-blue-900 mb-4">
          Bienvenido al Proyecto Formativo
        </h2>
        <p className="text-gray-700 leading-loose">
          Este sitio web contiene la documentación completa del proyecto:
          prácticas, modelo PSP y auditoría. Está diseñado para facilitar
          el acceso, estudio y consulta por parte de aprendices e instructores.
        </p>
      </section>

      <section className="grid md:grid-cols-3 gap-6">
        <div className="bg-blue-100 p-6 rounded-xl border-l-4 border-blue-600 shadow">
          <h3 className="text-xl font-semibold text-blue-900 mb-2">Prácticas</h3>
          <p className="text-gray-700">Documentación completa de la estructura del proyecto y actividades.</p>
        </div>

        <div className="bg-green-100 p-6 rounded-xl border-l-4 border-green-600 shadow">
          <h3 className="text-xl font-semibold text-green-900 mb-2">PSP</h3>
          <p className="text-gray-700">Modelo Personal Software Process aplicado al proyecto formativo.</p>
        </div>

        <div className="bg-purple-100 p-6 rounded-xl border-l-4 border-purple-600 shadow">
          <h3 className="text-xl font-semibold text-purple-900 mb-2">Auditoría</h3>
          <p className="text-gray-700">Revisión técnica, hallazgos, conformidades y plan de mejora.</p>
        </div>
      </section>

    </div>
  );
}
