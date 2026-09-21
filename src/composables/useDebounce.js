import { ref, watch } from "vue";

// Devuelve una copia "retrasada" de un ref: útil para que el filtrado
// se recalcule un instante después de que el usuario deja de tipear,
// en vez de en cada tecla (buscador "iterativo").
export function useDebounce(source, delay = 200) {
  const debounced = ref(source.value);
  let timer = null;

  watch(source, (valor) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      debounced.value = valor;
    }, delay);
  });

  return debounced;
}
