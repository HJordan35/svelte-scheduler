<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";

  export let verticalPosition = "bottom";
  export let horizontalPostion = "right";

  let showButton = false;

  onMount(() => {
    setTimeout(() => {
      showButton = true;
    }, 1000);
  });
</script>

<style type="text/scss">
  @import "../../scss/abstracts/variables";

  @function vertPos($position, $prop) {
    @if $prop == "top" {
      @if $position == "top" {
        @return 32px;
      } @else {
        @return null;
      }
    } @else {
      @if $position == "top" {
        @return null;
      } @else {
        @return 32px;
      }
    }
  }

  @function horzPos($position, $prop) {
    @if $prop == "left" {
      @if $position == "left" {
        @return 32px;
      } @else {
        @return null;
      }
    } @else {
      @if $position == "left" {
        @return null;
      } @else {
        @return 32px;
      }
    }
  }
  .fixed-button {
    position: fixed;
    width: 64px;
    height: 64px;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0px 0px 25px $app-shadow;
    top: vertPos(#{verticalPosition}, "top");
    bottom: vertPos(#{verticalPosition}, "bottom");
    left: horzPos(#{horizontalPostion}, "left");
    right: horzPos(#{horizontalPostion}, "right");
  }
</style>

<!-- 
Floating Button Component

Button with is set in a fixed position to its parent relative
container and can be passed positional attributes, a click handler
and a child icon
-->
{#if showButton}
  <div class="fixed-button" in:fly="{{ y: 200 }}">
    <slot />
  </div>
{/if}
