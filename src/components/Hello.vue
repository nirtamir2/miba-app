<template>
  <div>
    <v-list two-line dark>
      <template v-for="item in items">
        <v-subheader v-if="item.header" v-text="item.header"></v-subheader>
        <v-divider v-else-if="item.divider" v-bind:inset="item.inset"></v-divider>
        <v-list-tile avatar v-else v-bind:key="item.title">
          <v-list-tile-avatar>
            <img v-bind:src="item.avatar"></v-list-tile-avatar>
          <v-list-tile-content>
            <v-list-tile-title v-html="item.title"></v-list-tile-title>
            <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>
    <h1>{{a}}</h1>
  </div>
</template>
<script>
  import {db} from '../firebase'
  export default {
    data () {
      return {
        items: [
          {header: 'Today'},
          {
            avatar: 'https://api.adorable.io/avatars/285/1@adorable.io.png',
            title: 'Brunch this weekend?',
            subtitle: "<span class='grey--text text--lighten-2'>Ali Connors</span> — I'll be in your neighborhood doing errands this weekend. Do you want to hang out?"
          },
          {divider: true, inset: true},
          {
            avatar: 'https://api.adorable.io/avatars/285/2@adorable.io.png',
            title: 'Summer BBQ <span class="grey--text text--lighten-1">4</span>',
            subtitle: "<span class='grey--text text--lighten-2'>to Alex, Scott, Jennifer</span> — Wish I could come, but I'm out of town this weekend."
          },
          {divider: true, inset: true},
          {
            avatar: 'https://api.adorable.io/avatars/285/3@adorable.io.png',
            title: 'Oui oui',
            subtitle: "<span class='grey--text text--lighten-2'>Sandra Adams</span> — Do you have Paris recommendations? Have you ever been?"
          }
        ]
      }
    },
  firebase()
  {
    return{
      a: db.ref('/')
    }
  }
  }
</script>

