<script>
    import { appMode } from "../stores";

    export let x = 200;
    export let y = 200;
    export let width = 400;
    export let height = 100;
    export let content = "empty";

    $: editable = $appMode === "field";
</script>

<textarea
    class:editable
    style="position: absolute; top: {x}px; left: {y}px; width: {width}px; height: {height}px"
    >{content}</textarea
>

<style>
    textarea {
        border: 2px solid black;
        resize: none;
    }

    textarea.editable {
        border: 2px dashed black;
    }
</style>
