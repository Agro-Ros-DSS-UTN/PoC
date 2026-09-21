<script setup>
// Recibe el texto de búsqueda por prop (v-model desde el padre) y emite
// el nuevo valor en cada tecleo. Componente "tonto": no sabe nada de la
// lista de resultados, solo expone un input controlado.
defineProps({
  modelValue: { type: String, default: "" },
});
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="buscador-input">
    <span class="icono" aria-hidden="true">🔎</span>
    <input
      type="text"
      class="input"
      placeholder="Buscar por nombre o descripción..."
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<style scoped>
.buscador-input {
  display: flex;
  align-items: center;
  gap: 10px;
  background: #ffffff;
  border: 1px solid #d6e2df;
  border-radius: 10px;
  padding: 10px 14px;
}
.icono {
  font-size: 15px;
  opacity: 0.7;
}
.input {
  flex: 1;
  border: none;
  outline: none;
  font-size: 14px;
  color: #1e2a33;
}
.input::placeholder {
  color: #9aa8a5;
}
</style>
