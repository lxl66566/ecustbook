<template>
  <div>
    <figure :style="{ maxWidth: scale }">
      <img :alt="alt" :src="'/ecustbook' + src" loading="lazy" />
      <figcaption v-if="alt">{{ alt }}</figcaption>
    </figure>
  </div>
</template>

<script>
export default {
  props: {
    alt: {
      type: String,
      required: false,
    },
    src: {
      type: String,
      required: true,
    },
    scale: {
      type: String,
      default: "60%",
    },
  },
};
</script>

<style scoped>
div,
figcaption {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}
</style>
