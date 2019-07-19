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
      font-weight: 200;
      font-size: 3rem;
    }
  }
</style>

<div class="container">
  <h1>{headline}</h1>
</div>
