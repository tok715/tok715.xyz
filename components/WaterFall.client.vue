<script setup lang="ts">
const props = defineProps<{
  lang: string;
  content: string;
  cycles: number;
}>();

const { content, cycles, lang } = toRefs(props);

const emit = defineEmits<{
  (event: "done"): void;
}>();

const showing = ref("");

class WaterFallRunner {
  target: string[];

  cycles: number;

  output: string[];

  fn: (text: string) => void | Promise<void>;

  constructor(
    content: string,
    cycles: number,
    fn: (text: string) => void | Promise<void>
  ) {
    this.target = content.split("");
    this.output = Array.from(this.target, () => "");
    this.cycles = cycles;
    this.fn = fn;
  }

  async invoke(): Promise<void> {
    const ret = this.fn(this.output.join(""));
    if (!!ret && !!ret.then) {
      await ret;
    }
  }

  async run(): Promise<void> {
    if (this.target.length < 1) {
      return;
    }

    await this.invoke();

    for (let i = 0; i < this.target.length; i++) {
      for (let j = 0; j < this.cycles; j++) {
        await waitDecay(j);

        this.output[i] = randomChar(
          lang.value == "zh" ? randomChineseChars : randomEnglishChars
        );

        await this.invoke();
      }

      await waitDecay(this.cycles);

      this.output[i] = this.target[i];

      await this.invoke();
    }

    return;
  }
}

onMounted(async () => {
  const runner = new WaterFallRunner(content.value, cycles.value, (text) => {
    showing.value = text;
  });
  await runner.run();
  emit("done");
});
</script>

<template>
  <span>
    {{ showing }}
  </span>
</template>
