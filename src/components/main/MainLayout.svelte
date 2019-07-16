<script>
  import MainCard from "./MainCard.svelte";
  import FloatingButton from "controls/FloatingButton.svelte";
  import Upload from "svgs/Upload.svelte";

  import {APP_COLORS} from "../../constants/AppConstants.js";
</script>

<style type="text/scss">
  @import "../../scss/abstracts/variables";
  .container {
    grid-area: content;
    background-color: $app-background;
    padding: 24px 56px 24px 56px;
    h1 {
      color: $app-primary;
      margin: 0px;
    }
    .icon-container {
      display: flex;
      width: 100%;
      height: 100%;
      justify-content: center;
      align-items: center;
    }
  }
</style>

<div class="container">
  <MainCard />
  <FloatingButton>
    <div class="icon-container" on:click="{() => showFileLoader = true}">
      <Upload width={"32px"} setColor={APP_COLORS.APP_SECONDARY_COLOR} />
    </div>
  </FloatingButton>
</div>
