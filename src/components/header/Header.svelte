<script>
  export let headline = "Headline";
</script>

<style type="text/scss">
  @import "../../scss/abstracts/variables";
  .container {
    grid-area: header;
    display: flex;
    justify-content: center;
    align-items: center;
    h1 {
      color: $app-primary;
      margin: 0px;
    }
  }
</style>

<div class="container">
  <h1>{headline}</h1>
</div>
