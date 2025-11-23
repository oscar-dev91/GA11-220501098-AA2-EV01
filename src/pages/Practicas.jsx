export default function Practicas() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col space-y-8">

      <h1 className="text-3xl font-bold text-blue-900">Documento de Prácticas</h1>

      {/* Introducción */}
      <section className="bg-white p-8 shadow rounded-xl">
        <h2 className="text-2xl font-bold mb-3">Introducción</h2>
        <p className="text-gray-700 leading-relaxed">
          Este informe documenta el desarrollo del proyecto de prácticas del programa ADSI,
          detallando la estructura, ejecución, justificación y resultados esperados del sistema
          web implementado por el equipo de trabajo. Sirve como guía académica y evidencia del
          proceso formativo.
        </p>
      </section>

      {/* Alcance */}
      <section className="bg-white p-8 shadow rounded-xl">
        <h2 className="text-2xl font-bold mb-3">Alcance</h2>
        <p className="text-gray-700">
          El proyecto abarca el diseño, desarrollo y documentación de una plataforma web que gestiona
          información institucional. Incluye frontend, backend, base de datos, análisis de requisitos,
          arquitectura, pruebas y auditoría final.
        </p>
      </section>

      {/* Justificación */}
      <section className="bg-white p-8 shadow rounded-xl">
        <h2 className="text-2xl font-bold mb-3">Justificación del Proyecto</h2>
        <p className="text-gray-700 leading-relaxed">
          El proyecto responde a la necesidad de las instituciones pequeñas de contar con sistemas
          digitales que permitan gestionar información de manera eficiente. La falta de herramientas
          digitales genera demoras, errores manuales y poca trazabilidad. La solución propuesta es una
          plataforma web moderna, segura y escalable, dirigida a entidades educativas, cooperativas
          pequeñas o procesos internos institucionales.
        </p>
      </section>

      {/* Arquitectura */}
      <section className="bg-white p-8 shadow rounded-xl">
        <h2 className="text-2xl font-bold mb-3">Tipo de Arquitectura</h2>
        <p className="text-gray-700">
          La arquitectura del proyecto es **Cliente-Servidor**, con un frontend desarrollado en React,
          un backend en Node.js estructurado bajo patrón **MVC**, y base de datos relacional.
        </p>
      </section>

      {/* Objetivos */}
      <section className="bg-white p-8 shadow rounded-xl">
        <h2 className="text-2xl font-bold mb-5">Objetivos del Proyecto</h2>

        <h3 className="text-xl font-semibold text-blue-900">Objetivo General</h3>
        <p className="text-gray-700 mb-4">
          Desarrollar una plataforma web funcional que permita la gestión eficiente de la información
          institucional, aplicando las competencias adquiridas durante la formación.
        </p>

        <h3 className="text-xl font-semibold text-blue-900">Objetivos Específicos</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Diseñar la estructura del sistema y sus componentes.</li>
          <li>Implementar interfaces dinámicas y responsivas.</li>
          <li>Construir el backend aplicando el modelo MVC.</li>
          <li>Integrar la base de datos y asegurar la persistencia de datos.</li>
          <li>Documentar cada fase del proyecto.</li>
          <li>Aplicar auditoría interna para validar calidad.</li>
        </ul>
      </section>

    </div>
  );
}
