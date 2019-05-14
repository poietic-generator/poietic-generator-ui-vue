<template>
  <v-container>
    <v-layout text-xs-center wrap pa-3>
      <v-flex mb-4 xs12>
        <v-layout justify-center>
          <v-img
            :src="require('../assets/home-animation.gif')"
            class="home-animation"
            contain
            aspect-ratio
            max-height="400"
            max-width="400"
          ></v-img>
        </v-layout>
      </v-flex>

      <v-flex mb-4 xs12>
        <v-layout row justify-space-between>
          <v-btn xs6 class="mr-2" block large outline color="info">View</v-btn>
          <v-btn xs6 class="ml-2" block large outline color="success">Play</v-btn>
        </v-layout>
      </v-flex>

      <v-flex xs12 class="footer" pa-3 justify-center>
        <p class="subheading font-weight-regular pa-2 ma-0" >
          Copyleft 2019<br/>
          <a href="">Code</a> by Glenn Rolland<br/>
          <a href="">Original concept</a> by Olivier Auber
        </p>
      </v-flex>

    </v-layout>
  </v-container>
</template>

<script lang="ts">
  export default {
    props: ['msg'],
    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuetifyjs.com',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/layout/pre-defined',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },

      ],
    }),
  };
</script>

<style lang="scss" scoped>
.pg-spacer {
 max-width: 30px;
 
}
.home-animation {
  border: 1em solid white;
}

.footer {
  background-color: #222222;
}
</style>
