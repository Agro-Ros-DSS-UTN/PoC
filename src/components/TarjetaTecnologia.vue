<script setup>
defineProps({
  tecnologia: { type: Object, required: true },
});

const colorPorCategoria = {
  Vue: "#42b883",
  React: "#61dafb",
  Ambos: "#8a7ff0",
};
</script>

<template>
  <li class="tarjeta">
    <span
      class="badge"
      :style="{ background: colorPorCategoria[tecnologia.categoria] }"
    >
      {{ tecnologia.categoria }}
    </span>
    <div class="contenido">
      <p class="nombre">{{ tecnologia.nombre }}</p>
      <p class="descripcion">{{ tecnologia.descripcion }}</p>
    </div>
    <span class="tipo">{{ tecnologia.tipo }}</span>
  </li>
</template>

<style scoped>
.tarjeta {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 10px 12px;
  border-radius: 10px;
}
.tarjeta:hover {
  background: #f7faf9;
}
.badge {
  flex-shrink: 0;
  color: #ffffff;
  font-size: 10.5px;
  font-weight: 700;
  padding: 4px 9px;
  border-radius: 999px;
  min-width: 46px;
  text-align: center;
}
.contenido {
  flex: 1;
  min-width: 0;
}
.nombre {
  margin: 0;
  font-size: 14px;
  font-weight: 600;
  color: #1e2a33;
}
.descripcion {
  margin: 2px 0 0;
  font-size: 12px;
  color: #5b6b73;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
.tipo {
  flex-shrink: 0;
  font-size: 11px;
  color: #9aa8a5;
}
</style>
