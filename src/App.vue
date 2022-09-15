<template>
  <div id="app">
    <HeaderNav />
    <router-view class="rv-app" />
  </div>
</template>

<script>
import HeaderNav from "@/components/header/HeaderNav.vue";

export default {
  components: {
    HeaderNav,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.rv-app {
  margin-top: 60px;
}

.d-flex {
  display: flex;
}
</style>
