<script>
  import MainCard from "./MainCard.svelte";
  import FloatingButton from "controls/FloatingButton.svelte";
  import FloatingFileReader from "controls/FloatingFileReader.svelte";
  import Upload from "svgs/Upload.svelte";
  import { APP_COLORS } from "../../constants/AppConstants.js";
  import { onMount } from "svelte";

  import {indexHours} from "../../utilities/aggregators";

  let peopleCards = [];

  onMount(() => {
    let mainContainer = document.getElementById("main-container");
    mainContainer.addEventListener("csv-loaded", renderSchedule);
  });

  const renderSchedule = event => {
    let parsedCSV = event.detail;
    let numberedDateList = parsedCSV[1];
    let peopleList = indexHours(numberedDateList, parsedCSV.slice(2))

    /**
     * Loop thru the poeple list and push them to the cards list
     */
    peopleList.forEach(person => {
       peopleCards = [...peopleCards, person];
    });
  };
</script>

<style type="text/scss">
  @import "../../scss/abstracts/variables";
  .container {
    overflow: scroll;
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
