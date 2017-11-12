<template>
  <v-layout column>
    <v-flex xs6 offset-xs3>
      <songs-search-panel />
      <songs-panel class="mt-2"/>
    </v-flex>
  </v-layout>
</template>
<script>
  import SongsPanel from './SongsPanel'
  import SongsSearchPanel from './SongsSearchPanel'
  import SongsService from '@/services/SongsService'
  
  export default {
    name: 'Songs',
    components: {
      SongsPanel,
      SongsSearchPanel
    },
    methods: {
    },
    data () {
      return {
        songs: null
      }
    },
    async mounted () {
      this.songs = (await SongsService.index()).data
      console.log('songs, this.songs')
    }
  }
</script>
<style scoped>
  .song {
    padding: 20px;
    height: 330px;
    overflow: hidden;
  }
  .song-artist {
    font-size: 18px;
  }
  .album-image {
    width:70%
  }

</style>
