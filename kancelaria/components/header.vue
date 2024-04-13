<template>
    <div class="w-full flex items-center justify-center absolute py-8">
        <div class="max-w-screen-2xl w-full">
                <div class="container mx-auto text-white flex justify-between tracking-widest px-8">
                    <div class="">Logo Here</div>
                    <div :class="windowWidth <= 768 ? '' : 'hidden'"><Menu /></div>
                    <div :class="windowWidth > 768 ? '' : 'hidden'">
                        <ul class="flex gap-6">
                            <li>
                                Home
                            </li>
                            <li>
                                Kancelaria
                            </li>
                            <li>
                                Blog
                            </li>
                            <li>
                                Kontakt
                            </li>
                        </ul>
                    </div>
                </div>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      windowWidth: 0
    };
  },
  mounted() {
    this.$nextTick(() => {
      if (typeof window !== "undefined") {
        this.windowWidth = window.innerWidth;
        window.addEventListener("resize", this.onResize);
      }
    });
  },
  beforeDestroy() {
    if (typeof window !== "undefined") {
      window.removeEventListener("resize", this.onResize);
    }
  },
  methods: {
    onResize() {
      this.windowWidth = window.innerWidth;
    }
  }
};
</script>