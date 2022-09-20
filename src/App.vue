<template>
  <div class="bg" id="app">
    <HeaderNav />
    <router-view class="rv-app" />
    <FooterSection />
  </div>
</template>

<script>
import HeaderNav from "@/components/header/HeaderNav.vue";
import FooterSection from "@/components/footer/FooterSection.vue";

export default {
  components: {
    HeaderNav,
    FooterSection,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

/* body {
  background: black;
} */

.rv-app {
  margin-top: 60px;
  padding: 0 100px;
}

.d-flex {
  display: flex;
}
</style>
