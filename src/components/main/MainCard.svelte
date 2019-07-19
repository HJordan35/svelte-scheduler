<script>
  import { fade } from "svelte/transition";
  import { slide } from "svelte/transition";
  import { scale } from "svelte/transition";

  import { onMount } from "svelte";
  export let position = 0;
  export let person = [];

  //Person Properties
  let name = "";
  let charName = "";

  onMount(() => {
    formatPerson();
  });

  const formatPerson = () => {
    let matches = person[0].match(/\((.*?)\)/);
    name = matches ? matches[1] : person[0];
  };
</script>

<style type="text/scss">
  @import "../../scss/abstracts/variables";
  .main-card {
    margin: 0;
    min-height: 200px;
    position: relative;
    flex: 0 0 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px;
    padding: 16px;
    border-radius: 16px;
    background-color: white;
    box-shadow: 0 0 2rem $app-shadow;
    .style-line {
      position: absolute;
      top: 48px;
      width: 72%;
      height: 1px;
      background-color: $app-primary;
      z-index: 0;
    }
    .icon {
      width: 64px;
      height: 64px;
      border-radius: 50%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      background-color: $app-primary;
      z-index: 1;
      &__name {
        color: white;
        font-weight: 200;
        font-size: 2rem;
      }
    }
    h1 {
      font-weight: 100;
      font-size: 1.25rem;
      color: $app-primary;
    }
  }
</style>

<div
  class="main-card"
  transition:fade={{ delay: position * 150, duration: 300 }}>
  <div class="style-line" transition:scale="{{delay: position * 150 + 750, duration: 300, opacity: 0, start: 0}}"/>
  <div class="icon" transition:slide="{{delay: position * 150 + 300, duration: 300 }}">
    <div class="icon__name">{name && name.substring(0, 1).toUpperCase()}</div>
  </div>
  <h1 transition:fade="{{ delay: position * 150 + 750, duration: 300 }}">{name}</h1>
</div>
