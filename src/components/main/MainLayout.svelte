<script>
  import MainCard from "./MainCard.svelte";
  import FloatingButton from "controls/FloatingButton.svelte";
  import FloatingFileReader from "controls/FloatingFileReader.svelte";
  import Upload from "svgs/Upload.svelte";
  import { APP_COLORS } from "../../constants/AppConstants.js";
  import { onMount } from "svelte";

  let numberedDateList = [];
  let peopleCards = [];

  onMount(() => {
    let mainContainer = document.getElementById("main-container");
    mainContainer.addEventListener("csv-loaded", renderSchedule);
  });

  const renderSchedule = event => {
    let parsedCSV = event.detail;
    numberedDateList = parsedCSV[1];

    /**
     * Loop thru the poeple rows and push them to the cards list
     * to generate a people card component only when a name exists
     */
    for (let i = 2; i < parsedCSV.length; i++) {
      if (parsedCSV[i][0] !== "") {
        console.log(parsedCSV[i]);
        peopleCards = [...peopleCards, parsedCSV[i]];
      }
    }
  };
</script>

<style type="text/scss">
  @import "../../scss/abstracts/variables";
  .container {
    grid-area: content;
    display: flex;
    flex-direction: row;
    flex-flow: wrap;
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

<div id="main-container" class="container">
  {#each peopleCards as person, i}
    <MainCard {person} position={i} />
  {/each}
  <FloatingButton>
    <div slot="pop">
      <FloatingFileReader />
    </div>
    <div slot="icon" class="icon-container">
      <Upload width={'32px'} setColor={APP_COLORS.APP_SECONDARY_COLOR} />
    </div>
  </FloatingButton>
</div>
