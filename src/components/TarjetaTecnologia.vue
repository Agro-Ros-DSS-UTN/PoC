<script setup>
defineProps({
  tecnologia: { type: Object, required: true },
});

const colorPorCategoria = {
  Vue: "#42b883",
  React: "#61dafb",
  Ambos: "#a78bfa",
};
</script>

<template>
  <li class="tarjeta">
    <div class="izquierda">
      <span
        class="badge"
        :style="{ color: colorPorCategoria[tecnologia.categoria], borderColor: colorPorCategoria[tecnologia.categoria] }"
      >
        {{ tecnologia.categoria }}
      </span>
      <div class="contenido">
        <p class="nombre">{{ tecnologia.nombre }}</p>
        <p class="descripcion">{{ tecnologia.descripcion }}</p>
      </div>
    </div>
    <span class="tipo">{{ tecnologia.tipo }}</span>
  </li>
</template>

<style scoped>
.tarjeta {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 11px 8px;
  border-radius: 10px;
  transition: background 0.15s;
}
.tarjeta:hover {
  background: rgba(38, 38, 41, 0.5);
}
.izquierda {
  display: flex;
  align-items: center;
  gap: 14px;
  min-width: 0;
}
.badge {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 30px;
  min-width: 52px;
  padding: 0 8px;
  border: 1px solid;
  border-radius: 6px;
  background: #18181b;
  font-family: "SFMono-Regular", Consolas, monospace;
  font-size: 10.5px;
  font-weight: 700;
  letter-spacing: 0.02em;
  text-transform: uppercase;
}
.contenido {
  min-width: 0;
}
.nombre {
  margin: 0;
  font-size: 13.5px;
  font-weight: 500;
  color: #f4f4f5;
}
.descripcion {
  margin: 2px 0 0;
  font-size: 11.5px;
  color: #71717a;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tipo {
  flex-shrink: 0;
  font-size: 11px;
  color: #a1a1aa;
  border: 1px solid #27272a;
  border-radius: 999px;
  padding: 4px 10px;
}
</style>
