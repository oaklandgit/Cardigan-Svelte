<script>
    import Draggable from "./Draggable.svelte";
    import Tool from "./Tool.svelte";
</script>

<Draggable>
    <div class="palette">
        <div class="handle">
            <div class="close" />
        </div>
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
</Draggable>

<style>
    .palette {
        background-color: white;
        border: 1px solid black;
        box-shadow: 2px 2px 0px black;

        /* grid-template-rows: 12px 12px 12px; */
    }
    .handle {
        padding: 6px;
        background-image: url(/assets/patterns/3.svg);
        background-size: 6px;
        background-repeat: repeat;
    }

    div.close {
        width: 8px;
        height: 8px;
        border: 1px solid black;
        background-color: white;
    }

    .toolGroup {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    .toolGroup:nth-child(2) {
        border-bottom: 6px double black;
    }
</style>
