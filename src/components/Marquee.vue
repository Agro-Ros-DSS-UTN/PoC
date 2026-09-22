<script setup>
defineProps({
  speed: { type: Number, default: 28 },
  pauseOnHover: { type: Boolean, default: true },
  direction: { type: String, default: "left" }, // "left" | "right"
});
</script>

<template>
  <div class="marquee" :class="{ pausable: pauseOnHover }">
    <div
      class="marquee__track"
      :class="{ reverse: direction === 'right' }"
      :style="{ '--duration': speed + 's' }"
    >
      <div class="marquee__group">
        <slot />
      </div>
      <div class="marquee__group" aria-hidden="true">
        <slot />
      </div>
    </div>
  </div>
</template>

<style scoped>
.marquee {
  width: 100%;
  overflow: hidden;
  -webkit-mask-image: linear-gradient(
    to right,
    transparent,
    #000 10%,
    #000 90%,
    transparent
  );
  mask-image: linear-gradient(
    to right,
    transparent,
    #000 10%,
    #000 90%,
    transparent
  );
}
.marquee__track {
  display: flex;
  width: max-content;
  animation: marquee-scroll var(--duration) linear infinite;
}
.marquee__track.reverse {
  animation-direction: reverse;
}
.marquee.pausable:hover .marquee__track {
  animation-play-state: paused;
}
.marquee__group {
  display: flex;
  align-items: center;
  flex-shrink: 0;
}
@keyframes marquee-scroll {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}
</style>
