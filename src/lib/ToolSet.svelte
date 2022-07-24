<script>
    import Tool from "./Tool.svelte";
</script>

<div>
    <div class="toolGroup">
        <Tool src="/assets/browse.svg" />
        <Tool src="/assets/button.svg" />
        <Tool src="/assets/field.svg" />
    </div>
    <div class="toolGroup">
        <Tool src="/assets/marquee.svg" />
        <Tool src="/assets/lasso.svg" />
        <Tool src="/assets/pencil.svg" />
        <Tool src="/assets/brush.svg" />
        <Tool src="/assets/eraser.svg" />
        <Tool src="/assets/line.svg" />
    </div>
</div>

<style>
    .toolGroup {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .toolGroup:first-child {
        border-bottom: 8px double black;
    }
</style>
