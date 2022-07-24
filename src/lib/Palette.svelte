<script>
    import Draggable from "./Draggable.svelte";
</script>

<Draggable>
    <div>
        <slot />
    </div>
</Draggable>

<style>
    div {
        background-color: white;
        padding: 12px;
        border: 2px solid black;
        box-shadow: 2px 2px 2px black;
    }
</style>
