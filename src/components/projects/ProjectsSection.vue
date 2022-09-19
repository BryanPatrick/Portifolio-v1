<template>
  <section>
    <div class="projects-container">
      <div class="card" v-for="x in items" :key="x.id">
        <img src="@/assets/image-not-found.jpg" :alt="x.alt" />
        <span>{{ x.name }}</span>
        <span>{{ x.description }}</span>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ProjectsSection",
  data: () => ({
    items: {
      item1: {
        id: 1,
        name: "item 1",
        description: "descrição do item 1",
        image: "@/assets/image-not-found.jpg",
        alt: "kkkk",
      },
      item2: {
        id: 2,
        name: "item 2",
        description: "descrição do item 2",
        image: "img",
        alt: "jjjj",
      },
      item3: {
        id: 3,
        name: "item 3",
        description: "descrição do item 3",
        image: "img",
        alt: "aaaa",
      },
      item4: {
        id: 4,
        name: "item 4",
        description: "descrição do item 4",
        image: "img",
        alt: "tttt",
      },
    },
  }),
};
</script>

<style scoped>
.projects-container {
  height: fit-content;
  width: 100%;
  border-bottom: 2px solid black;
  display: flex;
  align-content: center;
  justify-content: center;
  padding: 20px;
}

.card {
  height: fit-content;
  width: 200px;
  display: flex;
  flex-direction: column;
  text-align: center;
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 0 20px;
}
</style>
