<script>
    export let label = "untitled";
    export let x = 50;
    export let y = 50;
    export let width = 100;
    export let height = 40;
</script>

<button
    style="position: absolute; top: {x}px; left: {y}px; width: {width}px; height: {height}px"
>
    {label}
</button>
