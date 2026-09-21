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
  align-items: center;
  gap: 2px;
  flex-shrink: 0;
}
.chip {
  border: none;
  background: transparent;
  color: #a1a1aa;
  border-radius: 8px;
  padding: 6px 12px;
  font-size: 12.5px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.15s, color 0.15s;
}
.chip:hover {
  color: #e4e4e7;
  background: rgba(38, 38, 41, 0.6);
}
.chip.activo {
  background: #27272a;
  color: #ffffff;
}
</style>
