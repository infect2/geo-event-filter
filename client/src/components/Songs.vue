<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <panel />
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
