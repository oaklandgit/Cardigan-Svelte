<script>
    import { myStack } from "./stores";

    // export let id;
    export const elements = [];
</script>

{#each $myStack as { element, props }}
    <svelte:component this={element} {...props} />
{/each}
