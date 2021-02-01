<!-- author: wangcl -->
<!-- describe:  -->
<!-- props:  -->
<template>
  <div class="">This is inject component! {{ toInjectMsg }}</div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  inject: ["toInjectMsg"],
  methods: {},
  computed: {},
  watch: {},
  created() {},
  mounted() {},
};
</script>
<style lang="less" scoped></style>
