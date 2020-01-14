<template>
  <div class="about">
    <v-container>
      <h1>{{ title }}</h1>
      <p>{{ content }}</p>
      <!-- <vue-mathjax :formula="formula"></vue-mathjax> -->

      <v-card class="d-inline-block mx-auto">
        <v-container>
          <v-row justify="space-between">
            <v-col cols="auto">
              <v-img
                height="400"
                width="400"
                src="https://matematicasmas.files.wordpress.com/2012/04/propiedades-de-las-potencias1.jpg"
              ></v-img>
            </v-col>

            <v-col cols="auto" class="text-center pl-0">
              <v-row class="flex-column ma-0 fill-height" justify="center">
                <v-col class="px-0">
                  <v-btn icon>
                    <v-icon>mdi-heart</v-icon>
                  </v-btn>
                </v-col>

                <v-col class="px-0">
                  <v-btn icon>
                    <v-icon>mdi-bookmark</v-icon>
                  </v-btn>
                </v-col>

                <v-col class="px-0">
                  <v-btn icon>
                    <v-icon>mdi-share-variant</v-icon>
                  </v-btn>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-container>
      </v-card>
    </v-container>
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
      formula: "",
      function: ""
    };
  },
  mounted() {
    this.value = this.$route.params.theme;
    switch (this.value) {
      case "prop_exp":
        this.title = "Propiedades de los exponentes";
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
