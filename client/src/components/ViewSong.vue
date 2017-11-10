<template>
  <div>
    <v-layout>
      <v-flex xs6>
        <panel title="Song MetaData">
          <v-text-field
            label="Title"
            required
            :rules="[rules.required]"
            v-model="song.title">
          </v-text-field>
          <v-text-field
            label="Artist"
            required
            :rules="[rules.required]"
            v-model="song.artist">
          </v-text-field>
          <v-text-field
            label="Genre"
            required
            :rules="[rules.required]"
            v-model="song.genre">
          </v-text-field>
          <v-text-field
            label="Album"
            required
            :rules="[rules.required]"
            v-model="song.album">
          </v-text-field>
          <v-text-field
            label="Album Image URL"
            required
            :rules="[rules.required]"
            v-model="song.albumImageUrl">
          </v-text-field>
          <v-text-field
            label="Yourtube ID"
            required
            :rules="[rules.required]"
            v-model="song.youtubeId">
          </v-text-field>
        </panel>
      </v-flex>
      <v-flex xs8>
        <panel title="Song Structure" class="ml-4">
          <v-text-field
            multi-line
            label="Lyrics"
            v-model="song.lyrics">
          </v-text-field>
          <v-text-field
            multi-line
            label="Tab"
            v-model="song.tab">
          </v-text-field>
        </panel>
      </v-flex>
    </v-layout>
    <v-btn
      dark
      class="cyan"
      @click="create">
      Create Song
    </v-btn>
  </div>
</template>
<script>
import Panel from '@/components/Panel'
import SongsService from '@/services/SongsService'

export default {
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImageUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      rules: {
        required: (value) => !!value || 'Required.'
      }
    }
  },
  components: {
    Panel
  },
  methods: {
    async create () {
      this.error = null
      const areAllFieldsFilledIn = Object.keys(this.song).every(key => !!this.song[key])
      if (!areAllFieldsFilledIn) {
        this.error = 'please fill in all the required fields.'
        return
      }
      try {
        console.log(this.song)
        await SongsService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>
<style scoped>
  .danger-alert{
    color:red;
  }
</style>
