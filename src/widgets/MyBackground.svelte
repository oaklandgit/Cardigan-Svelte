<script>
    import { myStack } from "../stores";

    export let cardId = 0;

    export const elements = [];
</script>

{#each $myStack as { element, props }}
    <svelte:component this={element} {...props} />
{/each}
