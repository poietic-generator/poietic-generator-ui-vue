<template>
  <div>
    <v-navigation-drawer app fixed v-model="showMenu">      
      <v-list>
        <v-list-tile @click="showSettings">
          <v-list-tile-action>
            <v-icon>settings</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Settings</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="showHelp">
          <v-list-tile-action>
            <v-icon>help</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Help</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>

    <v-toolbar fixed app dark color="secondary">
      <v-toolbar-side-icon @click.stop="toggleMenu"></v-toolbar-side-icon>
      <v-toolbar-title class="white--text">Poetic Generator</v-toolbar-title>
    </v-toolbar>

  </div>
</template>

<script lang="ts">
  import { Component, Vue } from 'vue-property-decorator';

  @Component
  export default class TopToolbar extends Vue {
    private showMenu: boolean = false;

    private toggleMenu(): void {
      this.showMenu = !this.showMenu;
    }
    private showSettings(): void {
      alert('settings');
    }
    private showHelp(): void {
      alert('help');
    }
  }
</script>