<template>
  <section class="skills-container">
    <div class="languages-container">
      <div class="group" @click="renderHtml()">
        <div class="g-align">
          <span
            ><b>{{ skills.html.name }}</b></span
          >
          <div class="info">
            <span>{{ skills.html.level }}</span>
            <span>?</span>
          </div>
        </div>
        <span class="stars">{{ skills.html.stars }}</span> <br />
      </div>
      <div class="group" @click="renderCss()">
        <div class="g-align">
          <span
            ><b>{{ skills.css.name }}</b></span
          >
          <div class="info">
            <span>{{ skills.css.level }}</span>
            <span>?</span>
          </div>
        </div>
        <span class="stars">{{ skills.css.stars }}</span> <br />
      </div>
      <div class="group" @click="renderJs">
        <div class="g-align">
          <span
            ><b>{{ skills.javascript.name }}</b></span
          >
          <div class="info">
            <span>{{ skills.javascript.level }}</span>
            <span>?</span>
          </div>
        </div>
        <span class="stars">{{ skills.javascript.stars }}</span> <br />
      </div>
      <div class="group" @click="renderVue">
        <div class="g-align">
          <span
            ><b>{{ skills.vuejs.name }}</b></span
          >
          <div class="info">
            <span>{{ skills.vuejs.level }}</span>
            <span>?</span>
          </div>
        </div>
        <span class="stars">{{ skills.vuejs.stars }}</span> <br />
      </div>
    </div>
    <div class="details-container">
      <template v-if="showHtml">
        <span>{{ skills.html.description }}</span>
      </template>
      <template v-else-if="showCss">
        <span>{{ skills.css.description }}</span>
      </template>
      <template v-else-if="showJs">
        <span>{{ skills.javascript.description }}</span>
      </template>
      <template v-else-if="showVue">
        <span>{{ skills.vuejs.description }}</span>
      </template>
      <template v-else>
        <p>Initial State</p>
      </template>
    </div>
  </section>
</template>

<script>
export default {
  name: "SkillsSection",
  data: () => ({
    showHtml: false,
    showCss: false,
    showJs: false,
    showVue: false,
    skills: {
      html: {
        name: "HTML",
        stars: 5,
        level: "basics",
        description: `HTML`,
      },
      css: {
        name: "CSS",
        stars: 5,
        level: "basics",
        description: `CSS`,
      },
      javascript: {
        name: "Javascript",
        stars: 5,
        level: "basics",
        description: `JS`,
      },
      vuejs: {
        name: "Vuejs",
        stars: 5,
        level: "basics",
        description: `Vue`,
      },
    },
  }),
  methods: {
    renderHtml() {
      this.showHtml = true;
      this.showCss = false;
      this.showJs = false;
      this.showVue = false;
    },
    renderCss() {
      this.showHtml = false;
      this.showCss = true;
      this.showJs = false;
      this.showVue = false;
    },
    renderJs() {
      this.showHtml = false;
      this.showCss = false;
      this.showJs = true;
      this.showVue = false;
    },
    renderVue() {
      this.showHtml = false;
      this.showCss = false;
      this.showJs = false;
      this.showVue = true;
    },
  },
};
</script>

<style scoped>
.skills-container {
  height: fit-content;
  width: 100%;
  border-bottom: 2px solid black;

  display: flex;
}

.group {
  height: fit-content;
  width: 300px;
  background-color: white;
  box-shadow: 0 4px 20px 0 rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 10px 25px;
  margin: 10px 20px;
  cursor: pointer;
}

.g-align {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
}

.info span {
  margin: 0 5px;
}

.languages-container {
  width: 50%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.details-container {
  width: 50%;
}
</style>
