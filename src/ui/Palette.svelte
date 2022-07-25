<script>
    import Draggable from "./Draggable.svelte";
</script>

<Draggable>
    <div class="palette">
        <div class="handle">
            <div class="close" />
        </div>
        <div class="content">
            <slot />
        </div>
    </div>
</Draggable>

<style>
    .palette {
        background-color: white;
        border: 1px solid black;
        box-shadow: 2px 2px 0px black;
    }
    .handle {
        padding: 6px;
        background-image: url(/assets/patterns/3.svg);
        background-size: 6px;
        background-repeat: repeat;
    }

    .content {
        padding: 8px;
    }

    div.close {
        width: 8px;
        height: 8px;
        border: 1px solid black;
        background-color: white;
    }
</style>
