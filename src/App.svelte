<script>
  import Area from "./ui/Area.svelte";
  import Menubar from "./ui/Menubar.svelte";
  import Modal from "./ui/Modal.svelte";
  import Palette from "./ui/Palette.svelte";
  import MyBackground from "./widgets/MyBackground.svelte";
</script>

<Area pattern={2}>
  <MyBackground cardId={0} />
  <Menubar />
  <Palette>
    <p>Hello</p>
  </Palette>
</Area>

<Modal title="hello">
  <p>Gello</p>
</Modal>

<style>
</style>
