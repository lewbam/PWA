<template>
  <div>
    <transition name="page" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<script>
export default {
    name: 'layoutLogin' // id of the layout
}
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/icon?family=Material+Icons');
  @import url('https://code.getmdl.io/1.2.1/material.blue-red.min.css');
  @import url('https://fonts.googleapis.com/css?family=Lobster');

  .page-enter-active, .page-leave-active {
  transition: opacity 1s, transform 1s;
}
.page-enter, .page-leave-to {
  opacity: 0;
  transform: translateX(-30%);
}
</style>