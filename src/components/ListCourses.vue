<template>
  <div>
    <v-container>
      <v-card class="mx-auto" width="1300">
        <v-list>
          <v-list-group value="true">
            <template v-slot:activator>
              <v-list-item-title>Matemática</v-list-item-title>
            </template>

            <v-list-group v-for="(course, index) in courses" :key="index" no-action sub-group>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>{{ course.title }}</v-list-item-title>
                </v-list-item-content>
              </template>

              <v-list-item
                v-for="(theme, index) in course.themes"
                :key="index"
                link
                @click="goToTheme(theme.value)"
              >
                <v-list-item-title v-text="theme.name"></v-list-item-title>
              </v-list-item>
            </v-list-group>
          </v-list-group>
        </v-list>
      </v-card>
    </v-container>
  </div>
</template>

<script>
const axios = require("axios").default;

export default {
  data() {
    return {
      courses: [],
      course: "",
      name: ""
    };
  },
  methods: {
    goToTheme(value) {
      this.$router.push(`category/${value}`);
    }
  },
  mounted() {
    axios
      .get("/api/courses.json")
      .then(res => {
        this.courses = res.data;
      })
      .catch(err => {
        console.log(err);
      })
      .finally(() => {});
  }
};
</script>

<style lang="scss" scoped></style>
