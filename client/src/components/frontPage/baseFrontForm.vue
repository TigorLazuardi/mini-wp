<template>
  <div class="container">
    <div class="leftSide">1</div>
    <div class="rightSide">2</div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.container {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-wrap: nowrap;
}

.leftSide {
  flex-grow: 1;
  background-color: grey;
}

.rightSide {
  flex-grow: 1;
  background-color: black;
}
</style>>