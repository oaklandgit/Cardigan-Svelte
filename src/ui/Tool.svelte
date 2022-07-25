<script>
    export let src = "/assets/browse.svg";
    export let alt = "Move Tool";
    export let selected = false;
    export let callback = () => {
        alert("callback!");
    };
</script>

<div class="tool" class:selected on:click={callback}>
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

    div:hover,
    div.selected {
        background-color: black;
    }

    div:hover img,
    div.selected img {
        filter: invert(100%);
    }
</style>
