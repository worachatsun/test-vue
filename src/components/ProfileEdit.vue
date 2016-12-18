<template lang="html">
  <div class="ui segment">
    <h3 class="ui header">Profile Edit</h3>
    <profile-form v-model="profile" @save="save" @cancel="back"></profile-form>
  </div>
</template>

<script>
import ProfileForm from './ProfileForm'
import { Me } from '../services'

export default {
  components: {
    ProfileForm
  },
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
  },
  methods: {
    save () {
      Me.set(this.profile)
      .then(() => {
        this.back()
      })
    },
    back () {
      this.$router.push('/profile')
    }
  }
}
</script>
