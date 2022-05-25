<template>
  <h1>Pokemon: <span>#{{ id }}</span></h1>
</template>

<script>
export default {
  
  props: {
    id: {
      type: Number,
      required: true
    }
  },

  created() {
    const { id } = this.$route.params;

    console.log( id );
    // this.id = id
  }
}
</script>