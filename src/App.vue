<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <div class="d-flex align-center">
        <v-toolbar-title>FUNCTION</v-toolbar-title>
      </div>

      <v-spacer></v-spacer>

      <v-btn href="https://github.com/vuetifyjs/vuetify/releases/latest" target="_blank" text>
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>

    <v-content>
      <router-view />
    </v-content>

    <FooterComponent />
  </v-app>
</template>

<script>
import FooterComponent from "@/components/FooterComponent.vue";

export default {
  components: {
    FooterComponent
  },
  name: "App",
  data: () => ({
    //
  })
};
</script>
