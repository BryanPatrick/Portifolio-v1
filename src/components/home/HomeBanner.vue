<template>
  <div class="banner">
    <div class="description">
      <div class="desc-txt">
        <h2>Olá, eu sou o Bryan !!</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
          deleniti magni commodi veniam nulla voluptatum repellat impedit
          aliquid minima repellendus. Excepturi sequi sapiente maiores repellat
          nihil amet ullam, debitis veniam!
        </p>
      </div>
    </div>
    <div class="img-container">
      <img src="" alt="LOGO FOTO" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeBanner",
};
</script>

<style scoped>
.banner {
  display: flex;
  height: 400px;
  border-bottom: 2px solid black;
  align-items: center;
}

img {
  margin: 0 30px;
}

.description,
.mg-container {
  width: 50%;
}

.desc-txt {
  float: right;
  margin: 0 30px;
  width: 360px;
}

.desc-txt p {
  word-wrap: break-word;
}
</style>
