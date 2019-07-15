<script>
  import MainCard from "./MainCard.svelte";
</script>

<style type="text/scss">
  @import "../../scss/abstracts/variables";
  .container {
    grid-area: content;
    background-color: $app-background;
    h1 {
      color: $app-dark;
      margin: 0px;
    }
  }
</style>

<div class="container">
  <MainCard />
</div>
