<template>
  <div class="home">
    <HomeBanner />
    <ProjectsSection />
    <SkillsSection />
  </div>
</template>

<script>
import HomeBanner from "@/components/home/HomeBanner.vue";
import ProjectsSection from "@/components/projects/ProjectsSection.vue";
import SkillsSection from "@/components/skills/SkillsSection.vue";

export default {
  name: "HomeView",
  components: {
    HomeBanner,
    ProjectsSection,
    SkillsSection,
  },
};
</script>

<style scoped></style>
