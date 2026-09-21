<script setup>
import TarjetaTecnologia from "./TarjetaTecnologia.vue";

defineProps({
  resultados: { type: Array, required: true },
});
</script>

<template>
  <ul class="lista">
    <TarjetaTecnologia
      v-for="tec in resultados"
      :key="tec.id"
      :tecnologia="tec"
    />
    <li v-if="resultados.length === 0" class="vacio">
      No encontramos nada con ese criterio.
    </li>
  </ul>
</template>

<style scoped>
.lista {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.vacio {
  padding: 24px 12px;
  text-align: center;
  color: #9aa8a5;
  font-size: 13px;
}
</style>
