<script>
    import { appMode } from "../stores";

    //export const id = crypto.randomUUID();
    export let id = null;
    export let x = 200;
    export let y = 200;
    export let width = 400;
    export let height = 100;
    export let content = id;

    $: editable = $appMode === "field";

    // MOVE & RESIZE

    let moving = false;
    let resizing = false;
    const cornerSize = 20;

    function onLowerRight(e) {
        if (width - e.offsetX < cornerSize && height - e.offsetY < cornerSize) {
            return true;
        }
    }

    function onMouseDown(e) {
        if (!editable) return;

        if (onLowerRight(e)) {
            resizing = true;
        } else {
            moving = true;
        }
    }

    function onMouseMove(e) {
        if (moving) {
            x += e.movementX;
            y += e.movementY;
        }

        if (resizing) {
            width += e.movementX;
            height += e.movementY;
        }
    }

    function onMouseUp() {
        moving = false;
        resizing = false;
    }
</script>

<textarea
    readonly={editable}
    class:editable
    class:moving
    class:resizing
    on:mousedown={onMouseDown}
    style="left: {x}px; top: {y}px; width: {width}px; height: {height}px"
    >{content}</textarea
>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<style>
    textarea {
        border: 2px solid black;
        resize: none;
        position: absolute;
    }

    textarea.editable {
        border: 2px dashed black;
        outline: none;
        cursor: grab;
    }

    textarea.moving {
        cursor: grabbing;
    }

    textarea.resizing {
        cursor: nwse-resize;
    }
</style>
