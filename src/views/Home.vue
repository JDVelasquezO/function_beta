<template>
  <div class="home">
    <ListCourses />
  </div>
</template>

<script>
import ListCourses from "@/components/ListCourses.vue";

export default {
  name: "home",
  components: {
    ListCourses
  }
};
</script>
