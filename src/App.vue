<template>
  <div id="app">
    <app-header/>
    <router-view/>
  </div>
</template>

<script>
import AppHeader from './layouts/AppHeader.vue';
export default {
    components: {
      AppHeader
    }
}
</script>


<style>
  * { /*  * selecteert alle elementen */
  padding: 0;
  margin: 0;
  box-sizing: border-box;/* box blijft hetzelfde  ook met padding en margin*/
}
html {
  font: 62.5% 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;/* fontsize is van 16 px standaard naar 10px is makelijker met rem*/
  }
body {
  font-size: 1.6rem;/* is nu terug 16 px*/
} 
a {
  text-decoration: none;/* lijn wegdoen bij link*/
  color: inherit;/*kleur weg na klik*/
} 
</style>
