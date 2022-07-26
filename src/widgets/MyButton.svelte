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

    // MOVE & RESIZE

    let moving = false;
    let resizing = false;
    const cornerSize = 12;

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

<button
    on:dblclick={editButton}
    on:mousedown={onMouseDown}
    class:editable
    style="left: {x}px; top: {y}px; width: {width}px; height: {height}px"
>
    {label}
</button>

<svelte:window on:mouseup={onMouseUp} on:mousemove={onMouseMove} />

<style>
    button {
        position: absolute;
        background-color: white;
        border: 2px solid black;
        border-radius: 6px;
        box-shadow: 2px 2px 0 black;
    }

    button.editable {
        border: 2px dashed black;
    }
</style>
