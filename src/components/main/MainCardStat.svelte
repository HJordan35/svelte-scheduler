<script>
  import { fly } from "svelte/transition";
  import { cubicOut } from "svelte/easing";

  export let statName = string;
  export let statValue = 0;
  export let statWidth = 0;
  export let animationDelay = 0;

  function grow(node, { delay, duration, width }) {
    return {
      delay,
      duration,
      easing: cubicOut,
      css: t => {
        return `flex: ${width * t}`;
      }
    };
  }
</script>

<style type="text/scss">
  @import "../../scss/abstracts/variables";
  .stat-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
  }
  h2 {
    font-weight: 300;
    font-size: 0.85rem;
    color: $app-primary;
    margin: 0;
    width: 62px;
    text-align: right;
  }
  .stat-bar {
    height: 12px;
    margin-left: 4px;
    margin-right: 4px;
    background-color: $app-primary;
  }
  h3 {
    font-weight: 100;
    font-size: 0.75rem;
    color: $app-primary;
    margin: 0;
    text-align: center;
  }
</style>

<div class="stat-container">
  <h2>{statName}</h2>
  <div
    class="stat-bar"
    style="flex: {statWidth}"
    transition:grow={{ delay: animationDelay, duration: 600, width: statWidth }} />
  <h3>{statValue}</h3>
</div>
