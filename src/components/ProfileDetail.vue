<template>
  <div>
    <h4>Name: </h4>{{ profile.name | upper }}
    <h4>Description: </h4>{{ profile.description }} <p></p>
  </div>
</template>

<script>
export default {
  props: ['profile']
}
</script>
