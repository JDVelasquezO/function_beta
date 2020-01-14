<template>
  <div class="about">
    <h1>{{ title }}</h1>
    <p>{{ content }}</p>
    <vue-mathjax :formula="formula"></vue-mathjax>
  </div>
</template>

<script>
import { VueMathjax } from "vue-mathjax";

export default {
  components: {
    // eslint-disable-next-line vue/no-unused-components
    "vue-mathjax": VueMathjax
  },
  data() {
    return {
      value: "",
      title: "",
      content: "",
      formula: ""
    };
  },
  mounted() {
    this.value = this.$route.params.theme;
    switch (this.value) {
      case "prop_exp":
        this.title = "Propiedades de los exponentes";
        this.content = `
          Producto:
        `;
        this.formula = "$$a^{m}a^{n} = a^{m+n}$$";
        break;
      case "prop_rad":
        this.title = "Propiedades de los radicales";
        break;
      default:
        this.title = "Ruta no identificada";
        break;
    }
  }
};
</script>
