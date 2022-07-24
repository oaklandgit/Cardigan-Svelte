<script>

    export let pattern = 3;

</script>

<div style="background-image: url(/assets/patterns/{pattern}.svg">
<slot></slot>
</div>

<style>
    div {
        background-size: 6px;
        background-repeat: repeat;
    }
</style>