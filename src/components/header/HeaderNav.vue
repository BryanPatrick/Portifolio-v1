<template>
  <nav>
    <h1 class="logo">Bryan Patrick Portfólio</h1>
    <div>
      <router-link to="/">Home</router-link>
      <router-link to="/about">Sobre</router-link>
      <router-link to="/contact">Contato</router-link>
      <router-link to="/projects">Projetos</router-link>
      <router-link to="/simplified-curriculum"
        >Curriculo simplificado</router-link
      >
      <button class="DM">DarkMode</button>
    </div>
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
  margin: 0 16px;
}

nav {
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 60px;
  width: 100%;
  border-bottom: 2px solid black;

  position: fixed;
  top: 0;
}

.DM {
  cursor: pointer;
}

.logo {
  margin: 0 15px;
}
</style>
