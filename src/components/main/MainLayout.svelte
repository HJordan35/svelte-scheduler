<script>
  import MainCard from "./MainCard.svelte";
  import FloatingButton from "controls/FloatingButton.svelte";
</script>

<style type="text/scss">
  @import "../../scss/abstracts/variables";
  .container {
    grid-area: content;
    background-color: $app-background;
    padding: 24px 56px 24px 56px;
    h1 {
      color: $app-dark;
      margin: 0px;
    }
  }
</style>

<div class="container">
  <MainCard />
  <FloatingButton />
</div>
