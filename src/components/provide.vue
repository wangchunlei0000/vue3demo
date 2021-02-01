<!-- author: wangcl -->
<!-- describe:  -->
<!-- props:  -->
<template>
  <div class="">
    <!-- use  inject component -->
    provide
    <inject></inject>
  </div>
</template>

<script>
import Inject from "./inject.vue";
export default {
  components: { Inject },
  data() {
    return {
      toInject: "this is provide component data",
    };
  },
  // provide: {
  //   toInjectMsg: "toInjectMsg---",
  // },
  provide() {
    return {
      toInjectMsg: this.toInject,
    };
  },
  methods: {},
  computed: {},
  watch: {},
  created() {
    console.log("load   provide ...");
  },
  mounted() {},
};
</script>
<style lang="less" scoped></style>
