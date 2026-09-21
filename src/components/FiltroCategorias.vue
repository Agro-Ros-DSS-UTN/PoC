<script setup>
defineProps({
  categorias: { type: Array, required: true },
  activa: { type: String, required: true },
});
defineEmits(["cambiar"]);
</script>

<template>
  <div class="chips">
    <button
      v-for="cat in categorias"
      :key="cat"
      class="chip"
      :class="{ activo: activa === cat }"
      @click="$emit('cambiar', cat)"
    >
      {{ cat }}
    </button>
  </div>
</template>

<style scoped>
.chips {
  display: flex;
  gap: 8px;
  flex-wrap: wrap;
}
.chip {
  border: 1px solid #d6e2df;
  background: #ffffff;
  color: #5b6b73;
  border-radius: 999px;
  padding: 6px 16px;
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
}
.chip:hover {
  border-color: #42b883;
}
.chip.activo {
  background: #42b883;
  border-color: #42b883;
  color: #ffffff;
}
</style>
