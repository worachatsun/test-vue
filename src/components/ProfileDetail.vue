<template>
  <div>
    <img :src="profile.photo" class="ui circular image" v-if="profile.photo">
    <h4>Name: </h4>{{ profile.name | upper }}
    <h4>Description: </h4>{{ profile.description }} <p></p>
  </div>
</template>

<script>
export default {
  props: ['profile']
}
</script>

<style media="screen">
  img.circular.image {
    width: 100px;
    height: 100px;
  }
</style>
