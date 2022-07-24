<script>
    export let pattern = 3;
    export let height = "320px";
</script>

<div
    style="height: {height}; background-image: url(/assets/patterns/{pattern}.svg"
>
    <slot />
</div>

<style>
    div {
        background-size: 6px;
        background-position: top left;
        background-repeat: repeat;
        padding: 16px;
        background-color: white;
    }
</style>
