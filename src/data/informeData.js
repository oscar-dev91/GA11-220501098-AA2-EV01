const informeData = {
  autor: "Oscar Palomino",
  fecha: "2025",
  introduccion:
    "El presente informe documenta los resultados de la evaluación del comportamiento del software BancoDemo, aplicado según el componente formativo 'Aplicación de pruebas de software'. Se cubren metodología, recursos, resultados y recomendaciones.",
  recursos: {
    equipo: [
      "QA Principal: Oscar Palomino",
      "Apoyo técnico: Documentación de Django, React y MySQL",
      "Evaluadores externos: Usuarios de prueba (transferencias, operadores)"
    ],
    metricas: [
      "Tiempo de respuesta del servidor (promedio/máximo/mínimo)",
      "Tasa de errores por operación",
      "Rendimiento bajo carga (TPS)",
      "Usabilidad (pasos por tarea)",
      "Fiabilidad / estabilidad"
    ],
    ponderacion: [
      { criterio: "Rendimiento", peso: "25%", justificacion: "Es un sistema transaccional" },
      { criterio: "Fiabilidad", peso: "25%", justificacion: "Registro correcto de movimientos" },
      { criterio: "Usabilidad", peso: "20%", justificacion: "Acceso intuitivo" },
      { criterio: "Seguridad básica", peso: "20%", justificacion: "Protección de cuentas y datos" },
      { criterio: "Compatibilidad", peso: "10%", justificacion: "Móviles y escritorio" }
    ],
    fidelidad: "Pruebas automatizadas (Postman), pruebas manuales, comparativas y repetitivas.",
    criterios: "Tiempo < 1.5s, 100% de movimientos registrados en logs, ausencia de errores 500, >=80% en rendimiento/fiabilidad.",
    infra: [
      "Servidor backend: Ubuntu 22.04, Nginx, Gunicorn",
      "Base de datos: MySQL 8",
      "Frontend: React + Vite",
      "Herramientas: Postman, Chrome DevTools, MySQL Workbench, Locust"
    ]
  },
  tipos: [
    "Pruebas funcionales (unitarias, integración, regresión)",
    "Pruebas de rendimiento (carga, estrés, volumen)",
    "Pruebas de seguridad (autenticación, autorización)",
    "Pruebas de usabilidad y aceptación (UAT)",
    "Pruebas de integridad de datos"
  ],
  resultados: {
    resumen: [
      { tipo: "Funcionales", estado: "Aprobado", obs: "Flujos principales funcionando" },
      { tipo: "Rendimiento", estado: "Aprobado", obs: "1–1.3 s promedio por operación" },
      { tipo: "Seguridad", estado: "Aprobado parcial", obs: "Recomendado: rate limiting" },
      { tipo: "Usabilidad", estado: "Aprobado", obs: "Flujo claro y accesible" },
      { tipo: "Integridad de datos", estado: "Aprobado", obs: "Ningún movimiento perdido" }
    ],
    hallazgos: [
      "Endpoints del operador responden más rápido que los de usuario por menor carga.",
      "Necesidad de reforzar validaciones en frontend.",
      "Agregar paginación en el historial de movimientos para UI.",
      "Incrementar cobertura de pruebas automatizadas."
    ]
  },
  bitacora: [
    "Probar módulos individualmente antes de integrarlos.",
    "Pruebas repetitivas validaron la fiabilidad del sistema.",
    "Logs detallados facilitaron la detección de problemas.",
    "Separación de roles (usuario/operador) mejoró claridad operativa."
  ],
  conclusion:
    "BancoDemo cumple con los criterios establecidos: estabilidad, rendimiento e integridad. Recomendado: ampliar pruebas automatizadas, endurecer seguridad (rate limiting, auditoría) y optimizar frontend para escala."
};

export default informeData;