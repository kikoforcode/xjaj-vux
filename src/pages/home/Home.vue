<template>
  <div>
    <home-header></home-header>
    <home-grid></home-grid>
  </div>
</template>

<script>
import HomeHeader from './components/Header'
import HomeGrid from './components/Grid'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeGrid
  },
  data () {
    return {
      // note: changing this line won't causes changes
      // with hot-reload because the reloaded component
      // preserves its current state and we are modifying
      // its initial state.
      msg: 'Hello World!'
    }
  }
}
</script>

<style>

</style>
