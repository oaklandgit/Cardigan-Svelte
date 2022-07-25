<script>
    import { appMode } from "../stores";
    export let label = "untitled";
    export let x = 50;
    export let y = 50;
    export let width = 100;
    export let height = 40;

    $: editable = $appMode === "button";
</script>

<button
    class:editable
    style="position: absolute; top: {x}px; left: {y}px; width: {width}px; height: {height}px"
>
    {label}
</button>

<style>
    button {
        background-color: white;
        border: 2px solid black;
        border-radius: 6px;
        box-shadow: 2px 2px 0 black;
    }

    button.editable {
        border: 2px dashed black;
    }
</style>
