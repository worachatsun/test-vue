<template>
  <div class="ui segment">
    <h3 class="ui header">Profile</h3>
    <h4>Name: </h4>{{ profile.name }}
    <h4>Description: </h4>{{ profile.description }}
    <router-link to="/profile/edit" class="ui green button">Edit</router-link>
  </div>
</template>

<script>
import { Me } from '../services'

export default {
  data: () => ({
    profile: {
      name: '',
      description: ''
    }
  }),
  created () {
    Me.get((data) => {
      this.profile = data
    })
  }
}
</script>
