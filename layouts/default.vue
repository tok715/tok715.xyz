<script setup lang="ts">
const titleLabel = computed(() => {
  const route = useRoute();
  return route.meta.titleLabel || "noname";
});

const titleIcon = computed(() => {
  const route = useRoute();
  return route.meta.titleIcon || "i-heroicons-home";
});
</script>

<template>
  <Head>
    <Title>tok715.xyz - {{ titleLabel }}</Title>
  </Head>

  <div class="flex flex-row justify-center items-center py-8">
    <UButton
      :to="{ name: 'index' }"
      variant="link"
      class="flex flex-row items-center"
      icon="i-heroicons-home"
    ></UButton>
    <UIcon class="me-1" name="i-mdi-chevron-right"></UIcon>
    <UIcon class="font-semibold text-xl me-2" :name="titleIcon"></UIcon>
    <span class="font-semibold text-xl">{{ titleLabel }}</span>
  </div>

  <div class="flex flex-col items-center py-4">
    <slot></slot>
  </div>

  <div class="w-full grid grid-cols-1 gap-2 text-center pb-8">
    <Footer></Footer>
  </div>
</template>
