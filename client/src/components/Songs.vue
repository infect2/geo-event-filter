<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <h3> Yo Yo Yo</h3>
        <p>
          Hello there
        </p>
      </panel>
    </v-flex>
  </v-layout>
</template>
<script>
  import Panel from '@/components/Panel'
  export default {
    name: 'Songs',
    components: {
      Panel
    }
  }
</script>
<style scoped>
</style>
