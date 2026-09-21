# Buscador / filtro en vivo — subprograma de demo

Mini app en Vue 3 (Composition API) que muestra un buscador con filtro por
categoría sobre un catálogo de tecnologías del ecosistema Vue y React. Sirve
como ejemplo corto para mostrar reactividad en vivo durante la PoC.

## Qué muestra

- `ref` para el texto de búsqueda y la categoría activa.
- `computed` para la lista filtrada, que se recalcula sola cada vez que
  cambia el texto o la categoría (sin tocar el DOM a mano).
- Componentes chicos y con una sola responsabilidad (`BuscadorInput`,
  `FiltroCategorias`, `ListaResultados`, `TarjetaTecnologia`), comunicados
  por props y eventos (`v-model` propio con `update:modelValue`, `@cambiar`).
- `v-for` con `:key` para la lista de resultados y el estado vacío con `v-if`.

## Estructura de carpetas

```
buscador-filtro/
├── index.html            # punto de entrada de Vite
├── package.json
├── vite.config.js
├── README.md
└── src/
    ├── main.js            # createApp(App).mount('#app')
    ├── App.vue            # estado (ref/computed) y layout general
    ├── style.css
    ├── data/
    │   └── tecnologias.js # catálogo de ejemplo (hardcodeado)
    └── components/
        ├── BuscadorInput.vue
        ├── FiltroCategorias.vue
        ├── ListaResultados.vue
        └── TarjetaTecnologia.vue
```

## Cómo correrlo

```bash
npm install
npm run dev
```

Y abrir la URL que muestra la terminal (por defecto `http://localhost:5173`).

## Alternativa sin instalar nada

Si solo se quiere mostrar la demo rápido (por ejemplo durante la PoC, sin
`npm install` de por medio), está la versión equivalente en un único archivo
HTML, que carga Vue desde un CDN y corre con solo abrirla en el navegador:
`../buscador_filtro.html`.
