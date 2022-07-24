<script>
  import Area from "./lib/Area.svelte";
  import Menubar from "./lib/Menubar.svelte";
  import Palette from "./lib/Palette.svelte";
  import Window from "./lib/Window.svelte";
</script>

<div id="screen">
  <Menubar />
  <Area pattern={1} height="600px">
    <!-- <Window>
      <textarea>Hello</textarea>
    </Window> -->
  </Area>
</div>

<style>
  div#screen {
    width: 100%;
    height: 100%;
    background-color: black;
    padding: 2px;
  }
</style>
