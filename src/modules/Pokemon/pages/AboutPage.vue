<template>
  <h1>About Page</h1>
  <hr>
  <h2>{{ name }}</h2>
  <button @click="onChangeName">
    Change name
  </button>
</template>

<script>
export default {

  data() {
    return {
      name: 'Juanma'
    }
  },

  methods: {
    onChangeName() {
      this.name = "Minerva"
    }
  },

  beforeCreate() {
      console.log('beforeCreate')
  },
  created() {
      this.name = 'Juan Carlos'
      console.log('created')
      // Peticiones HTTP
  },
  beforeMount() {
      console.log('beforeMount')
  },
  mounted() {
      console.log('mounted')
  },
  beforeUpdate() {
      console.log('beforeUpdate')
  },
  updated() {
      console.log('updated')
  },
  activated() {
      console.log('activated')
  },
  deactivated() {
      console.log('deactivated')
  },
  beforeUnmount() {
      console.log('beforeUnmount')
  },
  unmounted() {
      console.log('unmounted')
  },
  errorCaptured() {
      console.log('errorCaptured')
  },
  renderTracked() {
      console.log('renderTracked')
  },
  renderTriggered() {
      console.log('renderTriggered')
  },
}
</script>