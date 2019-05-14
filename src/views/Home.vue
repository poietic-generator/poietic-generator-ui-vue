<template>
  <div class="home">
    <HomeToolbar></HomeToolbar>
    <HomeContent msg="Poietic Generator"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HomeContent from '@/components/HomeContent.vue'; // @ is an alias to /src
import HomeToolbar from '@/components/HomeToolbar.vue';

@Component({
  components: {
    HomeContent,
    HomeToolbar,
  },
})
export default class Home extends Vue {}
</script>
