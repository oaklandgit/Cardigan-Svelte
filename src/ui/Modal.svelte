<script>
    export let title = "untitled";
</script>

<div class="modal">
    <div class="titleBar"><span class="title">{title}</span></div>
    <div class="content"><slot /></div>
</div>

<style>
    .modal {
        position: absolute;
        top: 40%;
        left: 50%;
        transform: translate(-50%, -50%);
        background-color: white;
        width: 600px;
        border: 2px solid black;
        padding: 2px;
    }

    .titleBar {
        text-align: center;
        background-image: url(/assets/patterns/4.svg);
        background-position: 0 4px;
        background-repeat: repeat-x;
        height: 22px;
    }

    .title {
        background-color: #fff;
        padding: 0 6px;
    }

    .content {
        position: relative;
        border: 3px solid black;
        padding: 16px;
    }
</style>
