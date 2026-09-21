<script setup>
import { ref, computed } from "vue";
import { tecnologias } from "./data/tecnologias.js";
import BuscadorInput from "./components/BuscadorInput.vue";
import FiltroCategorias from "./components/FiltroCategorias.vue";
import ListaResultados from "./components/ListaResultados.vue";

// --- Estado reactivo ---
const busqueda = ref("");
const categoriaActiva = ref("Todas");
const categorias = ["Todas", "Vue", "React", "Ambos"];

// --- Filtro en vivo: se recalcula solo cuando cambia busqueda o categoriaActiva ---
const resultados = computed(() => {
  const texto = busqueda.value.trim().toLowerCase();
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
      <h1>🔎 Buscador de tecnologías</h1>
      <p>Demo — filtro en vivo con reactividad de Vue</p>
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
  background: #ffffff;
  width: 100%;
  max-width: 520px;
  border-radius: 18px;
  box-shadow: 0 18px 40px rgba(30, 42, 51, 0.14);
  overflow: hidden;
}
.card-header {
  background: #1e2a33;
  color: #fff;
  padding: 22px 26px;
}
.card-header h1 {
  margin: 0 0 4px;
  font-size: 19px;
}
.card-header p {
  margin: 0;
  font-size: 12.5px;
  color: #8fa3a0;
}
.controles {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 18px 20px 10px;
}
.card-footer {
  display: flex;
  justify-content: space-between;
  padding: 12px 20px 18px;
  font-size: 12.5px;
  color: #5b6b73;
  border-top: 1px solid #eef3f1;
  margin-top: 6px;
}
.card-footer b {
  color: #2e8b63;
}
</style>
