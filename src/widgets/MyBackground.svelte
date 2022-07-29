<script>
    import { myStack } from "../stores";
    import axios from "axios";
    import { onMount } from "svelte";
    import MyButton from "./MyButton.svelte";
    import MyField from "./MyField.svelte";

    const endpoint = "http://localhost:4000/stack";

    onMount(async () => {
        try {
            const res = await axios.get(endpoint);
            myStack.update(() => {
                return res.data;
            });
        } catch (e) {
            console.log(e);
        }
    });

    // export let cardId = 0;
    // export const elements = [];
</script>

<div class="background">
    {#each $myStack as item (item.id)}
        {#if item.element === "button"}
            <MyButton {...item} />
        {/if}
        {#if item.element === "field"}
            <MyField {...item} />
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
