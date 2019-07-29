<script>
  import { fade } from "svelte/transition";
  import { slide } from "svelte/transition";
  import { scale } from "svelte/transition";

  import MainCardStat from "./MainCardStat";

  export let position = 0;
  export let person = {};
</script>

<style type="text/scss">
  @import "../../scss/abstracts/variables";
  .main-card {
    margin: 0;
    min-height: 200px;
    position: relative;
    flex: 0 0 325px;
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
  <div
    class="style-line"
    transition:scale={{ delay: position * 150 + 750, duration: 300, opacity: 0, start: 0 }} />
  <div
    class="icon"
    transition:slide={{ delay: position * 150 + 300, duration: 300 }}>
    <div class="icon__name">{person.name && person.charName}</div>
  </div>
  <h1 transition:fade={{ delay: position * 150 + 750, duration: 300 }}>
    {person.name}
  </h1>
  <MainCardStat
    statName="Total"
    statValue={person.totalHours}
    statWidth={person.totalHours / person.totalHours}
    animationDelay={position * 150 + 850} />
  <MainCardStat
    statName="Weekday"
    statValue={person.weekdayHours}
    statWidth={person.weekdayHours / person.totalHours}
    animationDelay={position * 150 + 950} />
  <MainCardStat
    statName="Weekend"
    statValue={person.weekendHours}
    statWidth={person.weekendHours / person.totalHours}
    animationDelay={position * 150 + 1050} />
  <MainCardStat
    statName="Holiday"
    statValue={person.holidayHours}
    statWidth={person.holidayHours / person.totalHours}
    animationDelay={position * 150 + 1150} />
  <MainCardStat
    statName="PTO"
    statValue={person.ptoHours}
    statWidth={person.ptoHours / person.totalHours}
    animationDelay={position * 150 + 1250} />
</div>
