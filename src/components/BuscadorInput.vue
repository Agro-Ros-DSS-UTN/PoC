<script setup>
// Recibe el texto de búsqueda por prop (v-model desde el padre) y emite
// el nuevo valor en cada tecleo. Componente "tonto": no sabe nada de la
// lista de resultados, solo expone un input controlado.
defineProps({
  modelValue: { type: String, default: "" },
});
const emit = defineEmits(["update:modelValue"]);

function limpiar() {
  emit("update:modelValue", "");
}
</script>

<template>
  <div class="buscador-input">
    <input
      type="text"
      class="input"
      placeholder="Buscar por nombre o descripción..."
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
    <Transition name="icon-swap" mode="out-in">
      <svg
        v-if="!modelValue"
        key="search"
        class="icono"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        aria-hidden="true"
      >
        <circle cx="11" cy="11" r="8" />
        <path d="m21 21-4.3-4.3" />
      </svg>
      <button
        v-else
        key="clear"
        type="button"
        class="icono icono-btn"
        aria-label="Limpiar búsqueda"
        @click="limpiar"
      >
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path d="M18 6 6 18" />
          <path d="m6 6 12 12" />
        </svg>
      </button>
    </Transition>
  </div>
</template>

<style scoped>
.buscador-input {
  position: relative;
  flex: 1;
  display: flex;
  align-items: center;
}
.icono {
  position: absolute;
  right: 10px;
  width: 15px;
  height: 15px;
  color: #71717a;
}
.icono-btn {
  border: none;
  background: transparent;
  padding: 2px;
  margin: 0;
  cursor: pointer;
  display: flex;
}
.icono-btn:hover {
  color: #e4e4e7;
}
.input {
  width: 100%;
  border: 1px solid #27272a;
  background: rgba(38, 38, 41, 0.5);
  border-radius: 10px;
  padding: 9px 32px 9px 12px;
  font-size: 13.5px;
  color: #e4e4e7;
  outline: none;
  transition: border-color 0.15s, background 0.15s;
}
.input::placeholder {
  color: #71717a;
}
.input:focus {
  border-color: #52525b;
  background: rgba(38, 38, 41, 0.8);
}

.icon-swap-enter-active,
.icon-swap-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}
.icon-swap-enter-from,
.icon-swap-leave-to {
  opacity: 0;
  transform: scale(0.7);
}
</style>
