<script>
  import Area from "./lib/Area.svelte";
  import MyBackground from "./lib/MyBackground.svelte";
  import Menubar from "./lib/Menubar.svelte";
  import Palette from "./lib/Palette.svelte";
</script>

<Area pattern={2}>
  <MyBackground cardId={0} />
  <Menubar />
  <Palette>
    <p>Hello</p>
  </Palette>
</Area>

<style>
</style>
