<script>
  import Header from "header/Header.svelte";
  import Footer from "footer/Footer.svelte";

  import LeftNav from "navigation/LeftNav.svelte";
  import Aside from "navigation/Aside.svelte";

  import MainLayout from "main/MainLayout.svelte";
</script>

<style type="text/scss" global>
  :global(body) {
    margin: 0;
    padding: 0;
	}
  .app {
    display: grid;

    grid-template-areas:
      "nav header header"
      "nav content content"
      "nav content content";

    grid-template-columns: 200px 1fr 200px;
    grid-template-rows: 85px 1fr 24px;

    min-height: 100vh;
  }

  @media (max-width: 768px) {
    .app {
      grid-template-areas:
        "header"
        "nav"
        "content"
        "side"
        "footer";

      grid-template-columns: 1fr;
      grid-template-rows:
        auto /* Header */
        minmax(75px, auto) /* Nav */
        1fr /* Content */
        // minmax(75px, auto) /* Sidebar */
        // auto; /* Footer */
    }
  }
</style>

<div class="app">
  <Header headline="Set Calendar" />
  <LeftNav />
  <MainLayout />
  <!-- <Aside /> -->
  <!-- <Footer /> -->
</div>
