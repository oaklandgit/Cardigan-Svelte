<script>
    export let pattern = 3;
    export let height = 342;
</script>

<div
    style="height: {height}px; background-image: url(/assets/patterns/{pattern}.svg"
>
    <slot />
</div>

<style>
    div {
        position: relative;
        background-size: 6px;
        background-position: top left;
        background-repeat: repeat;
        background-color: white;
    }
</style>
