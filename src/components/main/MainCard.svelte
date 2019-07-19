
<script>
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  export let position = 0;
  export let person = [];
</script>
<style type="text/scss">
  @import "../../scss/abstracts/variables";
  .main-card {
    height: 50px;
    width: 50px;
    margin: 0;
    flex: 1 0 200px;
    margin: 16px;
    border-radius: 16px;
    background-color: white;
    box-shadow: 0px 0px 25px $app-shadow;
  }
</style>

<div class="main-card" transition:slide="{{delay:(position*150), duration: 300, easing: quintOut }}">{person}</div>
