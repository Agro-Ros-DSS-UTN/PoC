<script setup>
import Marquee from "./Marquee.vue";

const sponsors = [
  { nombre: "Agroquímica Rosario S.A.", img: "/sponsors/agroquimica-rosario.jpg" },
  { nombre: "UTN", img: "/sponsors/utn.jpg" },
];
</script>

<template>
  <section class="sponsors">
    <p class="sponsors-label">Con el apoyo de</p>
    <Marquee :speed="7" pause-on-hover>
      <div class="sponsor-logo" v-for="s in sponsors" :key="s.nombre">
        <img :src="s.img" :alt="s.nombre" />
      </div>
    </Marquee>
  </section>
</template>

<style scoped>
.sponsors {
  width: 100%;
  max-width: 560px;
  margin: 28px auto 0;
}
.sponsors-label {
  margin: 0 0 16px;
  text-align: center;
  font-size: 13px;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  color: #a1a1aa;
}
.sponsor-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 96px;
  margin: 0 16px;
  padding: 14px 34px;
  background: #ffffff;
  border-radius: 14px;
  border: 1px solid #27272a;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
}
.sponsor-logo img {
  max-height: 66px;
  max-width: 220px;
  width: auto;
  display: block;
  object-fit: contain;
}
</style>
