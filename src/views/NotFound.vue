<template>
    <v-layout justify-center align-center>
        <v-flex shrink>
            <h1 :class="$style.title">
                404
                <span v-if="resource">
        {{ resource }}
      </span>
                Not Found
            </h1>
            <router-link to="/">Home</router-link>
            |
            <router-link to="/about">About</router-link>
        </v-flex>
    </v-layout>
</template>

<script>
export default {
  name: "NotFound",
  page: {
    title: "Not Found",
    meta: [{ name: "description", content: "404" }]
  },
  props: {
    resource: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" module>
.title {
  text-align: center;
}
</style>
