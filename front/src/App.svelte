<script>
  import Home from './components/pages/Home/Home.svelte';

  export let wasm;
</script>

<main>
  <Home {wasm} />
</main>

<style lang="scss">
  @import './styles/main';
</style>
