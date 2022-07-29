<script>
    import { myStack, selectedItems } from "../stores";
    import axios from "axios";
    import { onMount } from "svelte";
    import MyButton from "./MyButton.svelte";
    import MyField from "./MyField.svelte";
    import { backgroundDB } from "../lib/constants";

    onMount(async () => {
        try {
            const res = await axios.get(backgroundDB);
            myStack.update(() => {
                return res.data;
            });
        } catch (e) {
            console.log(e);
        }
    });

    // export let cardId = 0;
    // export const elements = [];
    function deselectAll() {
        $selectedItems = [];
    }
</script>

<div class="background" on:mousedown={deselectAll}>
    {#each $myStack as item (item.id)}
        {#if item.element === "button"}
            <MyButton {...item} selected={$selectedItems.includes(item.id)} />
        {/if}
        {#if item.element === "field"}
            <MyField {...item} selected={$selectedItems.includes(item.id)} />
        {/if}
    {/each}
</div>

<style>
    .background {
        width: 512px;
        height: 342px;
        background-color: white;
        border: 2px solid white;
        box-shadow: 2px 2px 0 black;
    }
</style>
