// Catálogo de ejemplo: herramientas del ecosistema Vue y React.
// Datos "hardcodeados" a propósito -en un proyecto real esto vendría de una API-
// para que la demo se pueda mostrar sin depender de conexión a internet.

export const tecnologias = [
  { id: 1, nombre: "Vite", categoria: "Vue", tipo: "Build tool", descripcion: "Bundler ultrarrápido con arranque casi instantáneo y HMR nativo." },
  { id: 2, nombre: "Pinia", categoria: "Vue", tipo: "Estado", descripcion: "Manejo de estado global oficial, sucesor de Vuex." },
  { id: 3, nombre: "Vue Router", categoria: "Vue", tipo: "Ruteo", descripcion: "Enrutador oficial para Single Page Applications." },
  { id: 4, nombre: "Nuxt", categoria: "Vue", tipo: "Framework", descripcion: "Meta-framework para renderizado en servidor (SSR) y sitios estáticos (SSG)." },
  { id: 5, nombre: "Vue DevTools", categoria: "Vue", tipo: "Herramienta", descripcion: "Extensión de navegador para inspeccionar componentes y estado en vivo." },
  { id: 6, nombre: "React Router", categoria: "React", tipo: "Ruteo", descripcion: "El enrutador más usado del ecosistema React." },
  { id: 7, nombre: "Redux", categoria: "React", tipo: "Estado", descripcion: "Manejo de estado predecible basado en un único store." },
  { id: 8, nombre: "Next.js", categoria: "React", tipo: "Framework", descripcion: "Meta-framework de Vercel para SSR, SSG y rutas basadas en archivos." },
  { id: 9, nombre: "Zustand", categoria: "React", tipo: "Estado", descripcion: "Alternativa liviana a Redux, con una API minimalista." },
  { id: 10, nombre: "React DevTools", categoria: "React", tipo: "Herramienta", descripcion: "Extensión de navegador para depurar componentes y hooks." },
  { id: 11, nombre: "TypeScript", categoria: "Ambos", tipo: "Lenguaje", descripcion: "Superset tipado de JavaScript, con soporte oficial en los dos ecosistemas." },
  { id: 12, nombre: "Vitest", categoria: "Ambos", tipo: "Testing", descripcion: "Framework de testing rápido basado en Vite, usable con Vue o React." },
];
