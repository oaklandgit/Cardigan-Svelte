<script>
  import Area from "./ui/Area.svelte";
  import Menubar from "./ui/Menubar.svelte";
  import MyBackground from "./widgets/MyBackground.svelte";
</script>

<Area pattern={2}>
  <MyBackground cardId={0} />
  <Menubar />
</Area>

<style>
</style>
