<script>
    import { appMode } from "../stores";
    export let label = "New Button";
    export let x = 200;
    export let y = 200;
    export let width = 100;
    export let height = 40;

    $: editable = $appMode === "button";

    function editButton() {
        if (!editable) return;
        alert("edit me!");
    }
</script>

<button
    on:dblclick={editButton}
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
