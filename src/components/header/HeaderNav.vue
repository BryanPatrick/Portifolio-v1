<template>
  <nav>
    <i>Logo</i>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/about">Sobre</router-link>
      <router-link to="/contact">Contato</router-link>
      <router-link to="/projects">Projetos</router-link>
      <router-link to="/simplified-curriculum"
        >Curriculo simplificado</router-link
      >
    </div>
    <i>DarkMode</i>
  </nav>
</template>

<script>
export default {
  name: "HeaderNav",
  data: () => {},
};
</script>

<style scoped>
a {
  text-decoration: none;
  color: black;
}
</style>
