<script>
    export let title = "untitled";
</script>

<div class="modal">
    <div class="titleBar">{title}</div>
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
        padding: 4px 0;
    }

    .content {
        position: relative;
        border: 3px solid black;
        padding: 16px;
    }
</style>
