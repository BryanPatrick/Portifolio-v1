<template>
  <section class="skills-container">
    <div class="card">
      <span>{{ skills.html.name }}</span>
      <span>{{ skills.html.stars }}</span>
      <span>{{ skills.html.level }}</span>
      <span>{{ skills.html.description }}</span>
    </div>
    <div class="card">
      <span>{{ skills.css.name }}</span>
      <span>{{ skills.css.stars }}</span>
      <span>{{ skills.css.level }}</span>
      <span>{{ skills.css.description }}</span>
    </div>
    <div class="card">
      <span>{{ skills.javascript.name }}</span>
      <span>{{ skills.javascript.stars }}</span>
      <span>{{ skills.javascript.level }}</span>
      <span>{{ skills.javascript.description }}</span>
    </div>
    <div class="card">
      <span>{{ skills.vuejs.name }}</span>
      <span>{{ skills.vuejs.stars }}</span>
      <span>{{ skills.vuejs.level }}</span>
      <span>{{ skills.vuejs.description }}</span>
    </div>
  </section>
</template>

<script>
export default {
  name: "SkillsSection",
  data: () => ({
    skills: {
      html: {
        name: "HTML",
        stars: 5,
        level: "basics",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          deleniti magni commodi veniam nulla voluptatum repellat impedit
          aliquid minima repellendus. Excepturi sequi sapiente maiores repellat
          nihil amet ullam, debitis veniam!`,
      },
      css: {
        name: "CSS",
        stars: 5,
        nível: "basics",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          deleniti magni commodi veniam nulla voluptatum repellat impedit
          aliquid minima repellendus. Excepturi sequi sapiente maiores repellat
          nihil amet ullam, debitis veniam!`,
      },
      javascript: {
        name: "Javascript",
        stars: 5,
        nível: "basics",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          deleniti magni commodi veniam nulla voluptatum repellat impedit
          aliquid minima repellendus. Excepturi sequi sapiente maiores repellat
          nihil amet ullam, debitis veniam!`,
      },
      vuejs: {
        name: "Vuejs",
        stars: 5,
        nível: "basics",
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          deleniti magni commodi veniam nulla voluptatum repellat impedit
          aliquid minima repellendus. Excepturi sequi sapiente maiores repellat
          nihil amet ullam, debitis veniam!`,
      },
    },
  }),
};
</script>

<style scoped>
.skills-container {
  height: 400px;
  width: 100%;
}

.card {
  height: fit-content;
  width: 300px;
  border: 2px solid black;
  border-radius: 10px;
}
</style>
