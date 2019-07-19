<script>
  import { onMount } from "svelte";
  import { fly } from "svelte/transition";
  import { slide } from "svelte/transition";
  import { quintOut } from "svelte/easing";

  export let verticalPosition = "bottom";
  export let horizontalPostion = "right";

  let showButton = false;
  let showPop = false;

  onMount(() => {
    setTimeout(() => {
      showButton = true;
    }, 1000);

    // Event Listener to toggle an open pop-container
    document.getElementById("float-container").addEventListener("toggle-pop", togglePop);
  });

  const togglePop = () => {
    showPop = !showPop;
  };
</script>

<style type="text/scss">
  @import "../../scss/abstracts/variables";

  @function vertPos($position, $prop, $offset) {
    @if $prop == "top" {
      @if $position == "top" {
        @return 32px + $offset;
      } @else {
        @return null;
      }
    } @else {
      @if $position == "top" {
        @return null;
      } @else {
        @return 32px + $offset;
      }
    }
  }

  @function horzPos($position, $prop, $offset) {
    @if $prop == "left" {
      @if $position == "left" {
        @return 32px + $offset;
      } @else {
        @return null;
      }
    } @else {
      @if $position == "left" {
        @return null;
      } @else {
        @return 32px + $offset;
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
    top: vertPos(#{verticalPosition}, "top", 0);
    bottom: vertPos(#{verticalPosition}, "bottom", 0);
    left: horzPos(#{horizontalPostion}, "left", 0);
    right: horzPos(#{horizontalPostion}, "right", 0);
  }
  .fixed-pop {
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 8px;
    background-color: white;
    box-shadow: 0px 0px 25px $app-shadow;
    top: vertPos(#{verticalPosition}, "top", 56px);
    bottom: vertPos(#{verticalPosition}, "bottom", 56px);
    left: horzPos(#{horizontalPostion}, "left", 48px);
    right: horzPos(#{horizontalPostion}, "right", 48px);
  }
</style>

<!-- 
Floating Button Component

Button with is set in a fixed position to its parent relative
container and can be passed positional attributes, a click handler
and a child icon
-->
<div id="float-container">
  {#if showPop}
    <div
      class="fixed-pop"
      transition:slide={{ delay: 250, duration: 300, easing: quintOut }}>
      <slot name="pop" />
    </div>
  {/if}
  {#if showButton}
    <div class="fixed-button" in:fly={{ y: 200 }} on:click={togglePop}>
      <slot name="icon" />
    </div>
  {/if}
</div>
