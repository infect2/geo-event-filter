<template>
  <div>
    <panel titile="Song Metadata">
      <div>
        {{song.title}}
        {{song.artist}}
        {{song.genre}}
        <img  :src="song.albumImage" />
      </div>
    </panel>
    <panel title="Youtube Video">
      {{song.youtubeId}}
      <youtube
        :video-id="song.youtubeId"
        :player-width="640"
        :player-height="480">
      </youtube>
    </panel>
  </div>
</template>
<script>
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {}
    }
  },
  async mounted () {
    const songId = this.$store.state.route.params.songId
    this.song = (await SongsService.show(songId)).data
    console.log(this.song)
  }
}
</script>
<style scoped>
</style>
