<script>
    export let src = "/assets/browse.svg";
    export let alt = "Move Tool";
</script>

<div class="tool">
    <img {src} {alt} width="32" height="32" />
</div>

<style>
    div {
        outline: 1px solid black;
        width: 32px;
        height: 32px;
    }

    img {
        transform: scale(0.8);
    }

    div:hover {
        background-color: black;
    }

    div:hover img {
        filter: invert(100%);
    }
</style>
