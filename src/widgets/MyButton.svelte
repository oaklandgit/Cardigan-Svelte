<script>
    import { appMode } from "../stores";
    import { scale } from "svelte/transition";
    import { myStack, selectedItems } from "../stores";
    import { backgroundDB } from "../lib/constants";
    import axios from "axios";

    export let id;
    export let label;
    export let x;
    export let y;
    export let width;
    export let height;
    export let selected = false;

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

    function selectButton(e) {
        if (!editable) return;

        $selectedItems = [id];

        if (onLowerRight(e)) {
            resizing = true;
        } else {
            moving = true;
        }
    }

    function dragButton(e) {
        if (moving) {
            x += e.movementX;
            y += e.movementY;
        }

        if (resizing) {
            width += e.movementX;
            height += e.movementY;
        }
    }

    function releaseButton(e) {
        if (moving || resizing) {
            saveButton();
            updateStore();
        }
        moving = false;
        resizing = false;
    }

    async function saveButton() {
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
                    element: "button",
                    label,
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

<button
    transition:scale
    on:dblclick={editButton}
    on:mousedown|stopPropagation={selectButton}
    on:mouseup={releaseButton}
    class:editable
    class:selected
    style="left: {x}px; top: {y}px; width: {width}px; height: {height}px"
>
    {label}
</button>

<svelte:window on:mousemove={dragButton} />

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

    button.selected {
        border-color: red;
    }
</style>
