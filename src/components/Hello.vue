<template>
  <div>
    <v-list two-line dark v-for="meetup in meetups">
      <v-subheader v-if="meetup.name" v-text="meetup.name"></v-subheader>
      <template v-for="people in meetup.participates">
        <v-list-tile avatar :key="people.name">
          <v-list-tile-avatar>
            <img :src="people.avatar"></v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-text="people.name"></v-list-tile-title>
            <v-list-tile-sub-title v-text="people.comment"></v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <buttons-panel :status = people.status></buttons-panel>
          </v-list-tile-action>
        </v-list-tile>
      </template>
    </v-list>
  </div>
</template>
<script>
  import {db} from '../firebase';
  import ButtonsPanel from './ButtonsPanel.vue'
  export default {
    data () {
      return {}
    },
    firebase()
    {
      return {
        meetups: db.ref('/meetups'),

      }
    },
    components: {ButtonsPanel}
  }
</script>
<style>
  /* This is for documentation purposes and will not be needed in your application */
  #create .speed-dial {
    position: absolute;
  }

  #create .btn--floating {
    position: relative;
  }
</style>
