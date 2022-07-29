<script>
    import Tool from "./Tool.svelte";
    import { appMode } from "../stores";

    function setMode(mode) {
        appMode.update(() => mode);
    }
</script>

<div>
    <div class="toolGroup">
        <Tool
            src="/assets/browse.svg"
            callback={() => setMode("browse")}
            selected={$appMode === "browse"}
        />
        <Tool
            src="/assets/button.svg"
            callback={() => setMode("button")}
            selected={$appMode === "button"}
        />
        <Tool
            src="/assets/field.svg"
            callback={() => setMode("field")}
            selected={$appMode === "field"}
        />
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
