<script>
    import { appMode } from "../stores";
    import { scale } from "svelte/transition";
    import { myStack, selectedItems } from "../stores";
    import { backgroundDB } from "../lib/constants";
    import axios from "axios";

    export let id;
    export let content;
    export let x;
    export let y;
    export let width;
    export let height;
    export let selected = false;

    $: editable = $appMode === "field";

    function editField() {
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

    function selectField(e) {
        if (!editable) return;

        $selectedItems = [id];

        if (onLowerRight(e)) {
            resizing = true;
        } else {
            moving = true;
        }
    }

    function dragField(e) {
        if (moving) {
            x += e.movementX;
            y += e.movementY;
        }

        if (resizing) {
            width += e.movementX;
            height += e.movementY;
        }
    }

    function releaseField(e) {
        if (moving || resizing) {
            saveField();
            updateStore();
        }
        moving = false;
        resizing = false;
    }

    async function saveField() {
        await axios.patch(backgroundDB + id, {
            x,
            y,
            width,
            height,
            updated: +new Date(),
        });
    }

    function updateStore() {
        myStack.update((currentStack) => {
            const i = currentStack.findIndex((items) => items.id === id);

            const updatedStack = [
                ...currentStack.slice(0, i),
                {
                    id,
                    element: "field",
                    content,
                    x,
                    y,
                    width,
                    height,
                },
                ...currentStack.slice(i + 1),
            ];
            return updatedStack;
        });
    }
</script>

<textarea
    transition:scale
    readonly
    on:dblclick={editField}
    on:mousedown|stopPropagation={selectField}
    on:mouseup={releaseField}
    class:editable
    class:selected
    style="left: {x}px; top: {y}px; width: {width}px; height: {height}px"
/>

<svelte:window on:mousemove={dragField} />

<style>
    textarea {
        position: absolute;
        /* background-color: white; */
        border: 2px solid black;
        resize: none;
        outline: none;
        background: top left repeat url(/assets/patterns/5.svg);
    }

    textarea.editable {
        border: 2px dashed black;
    }

    textarea.selected {
        border-color: red;
    }
</style>
