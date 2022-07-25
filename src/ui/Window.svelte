<script>
    import Draggable from "./Draggable.svelte";

    export let title = "untitled";
    export let width = "320px";
    export let height = "200px";
</script>

<Draggable>
    <div class="window" style="width: {width}; height: {height}">
        <div class="titleBar">
            {title}
        </div>
        <div class="content">
            <slot />
        </div>
    </div>
</Draggable>

<style>
    div.window {
        border: 1px solid black;
        background-color: white;
        box-shadow: 2px 2px 0 black;
    }
    div.titleBar {
        border-bottom: 1px solid black;
        padding: 2px 8px;
    }

    div.content {
        padding: 16px;
    }
</style>
