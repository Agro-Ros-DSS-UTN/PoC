<script setup>
import TarjetaTecnologia from "./TarjetaTecnologia.vue";

defineProps({
  resultados: { type: Array, required: true },
});
</script>

<template>
  <TransitionGroup tag="ul" name="fila" class="lista">
    <TarjetaTecnologia
      v-for="tec in resultados"
      :key="tec.id"
      :tecnologia="tec"
    />
    <li v-if="resultados.length === 0" key="vacio" class="vacio">
      No encontramos nada con ese criterio.
    </li>
  </TransitionGroup>
</template>

<style scoped>
.lista {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 1px;
  max-height: 320px;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: #3f3f46 transparent;
}
.lista::-webkit-scrollbar {
  width: 8px;
}
.lista::-webkit-scrollbar-thumb {
  background: #3f3f46;
  border-radius: 999px;
}
.lista::-webkit-scrollbar-track {
  background: transparent;
}
.vacio {
  padding: 28px 12px;
  text-align: center;
  color: #71717a;
  font-size: 13px;
}

.fila-enter-active,
.fila-leave-active,
.fila-move {
  transition: opacity 0.18s ease, transform 0.18s ease;
}
.fila-enter-from,
.fila-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}
.fila-leave-active {
  position: absolute;
  width: 100%;
}
</style>
