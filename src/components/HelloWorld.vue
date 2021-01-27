<template>
  <div class="hello">
    <div class="img-wrapper" v-for="(item, index) in test" :key="index">
      <img class="imgs" :src="result[index]" alt="" />
      <!-- <img class="imgs" :src="getPicUrl(item)" alt="" /> -->
    </div>
  </div>
</template>

<script>
// import { get } from "./util.js";s
export default {
  name: "HelloWorld",
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
