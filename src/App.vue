<script setup>
import { ref, computed } from "vue";
import { tecnologias } from "./data/tecnologias.js";
import { useDebounce } from "./composables/useDebounce.js";
import BuscadorInput from "./components/BuscadorInput.vue";
import FiltroCategorias from "./components/FiltroCategorias.vue";
import ListaResultados from "./components/ListaResultados.vue";

// --- Estado reactivo ---
const busqueda = ref("");
const busquedaDebounced = useDebounce(busqueda, 200);
const categoriaActiva = ref("Todas");
const categorias = ["Todas", "Vue", "React", "Ambos"];

// --- Filtro en vivo (iterativo): se recalcula solo cuando cambia
// busquedaDebounced o categoriaActiva. El input se actualiza al instante,
// pero el filtrado espera un instante desde el último tecleo. ---
const resultados = computed(() => {
  const texto = busquedaDebounced.value.trim().toLowerCase();
  return tecnologias.filter((tec) => {
    const coincideCategoria =
      categoriaActiva.value === "Todas" || tec.categoria === categoriaActiva.value;
    const coincideTexto =
      texto === "" ||
      tec.nombre.toLowerCase().includes(texto) ||
      tec.descripcion.toLowerCase().includes(texto);
    return coincideCategoria && coincideTexto;
  });
});

function elegirCategoria(cat) {
  categoriaActiva.value = cat;
}
</script>

<template>
  <div class="card">
    <header class="card-header">
      <div class="header-top">
        <span class="logo-frame" aria-hidden="true">
          <svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg">
            <path fill="#41b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110H78.8z" />
            <path fill="#41b883" d="M78.8,10L64,35.4L49.2,10H25.6l38.4,66.4L102.4,10H78.8z" />
            <path fill="#35495e" d="M25.6,10L64,76.4L102.4,10H78.8L64,35.4L49.2,10H25.6z" />
          </svg>
        </span>
        <div>
          <h1>Buscador de tecnologías</h1>
          <p>Demo — filtro en vivo con reactividad de Vue</p>
        </div>
      </div>
    </header>

    <div class="controles">
      <BuscadorInput v-model="busqueda" />
      <FiltroCategorias
        :categorias="categorias"
        :activa="categoriaActiva"
        @cambiar="elegirCategoria"
      />
    </div>

    <ListaResultados :resultados="resultados" />

    <footer class="card-footer">
      <span><b>{{ resultados.length }}</b> de {{ tecnologias.length }} tecnologías</span>
      <span>Vue 3 · Composition API</span>
    </footer>
  </div>
</template>

<style scoped>
.card {
  background: #0c0d0e;
  width: 100%;
  max-width: 560px;
  border-radius: 16px;
  border: 1px solid #27272a;
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.45);
  overflow: hidden;
  color: #e4e4e7;
}
.card-header {
  padding: 18px 20px 14px;
  border-bottom: 1px solid #1f1f22;
}
.header-top {
  display: flex;
  align-items: center;
  gap: 12px;
}
.logo-frame {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  border: 1px solid #2d3b34;
  border-radius: 8px;
  background: #0f1512;
}
.logo-frame svg {
  width: 18px;
  height: 18px;
}
.card-header h1 {
  margin: 0 0 3px;
  font-size: 16.5px;
  font-weight: 600;
  color: #fafafa;
}
.card-header p {
  margin: 0;
  font-size: 12px;
  color: #71717a;
}
.controles {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 10px;
  padding: 14px 16px;
}
.card-footer {
  display: flex;
  justify-content: space-between;
  padding: 12px 18px 16px;
  font-size: 12px;
  color: #71717a;
  border-top: 1px solid #1f1f22;
  margin-top: 4px;
}
.card-footer b {
  color: #42b883;
}
</style>
