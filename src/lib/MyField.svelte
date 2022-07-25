<script>
    export let label = "untitled";
    export let x = 123;
    export let y = 345;
    export let width = 400;
    export let height = 100;
    export let content = "empty";
</script>

<textarea
    style="position: absolute; top: {x}px; left: {y}px; width: {width}px; height: {height}px"
    >{content}</textarea
>

<style>
</style>
