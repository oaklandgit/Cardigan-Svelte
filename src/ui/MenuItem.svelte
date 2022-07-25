<script>
    export let label = "untitled";
    let selected = false;

    function toggleMenu() {
        selected = !selected;
    }

    function leaveMenu() {
        selected = false;
    }
</script>

<div class="menuItem" on:click={toggleMenu} on:mouseleave={leaveMenu}>
    <div class="menuItemLabel" class:selected>
        {label}
    </div>
    <div class="menuItemPopover" class:selected>
        <slot />
    </div>
</div>

<style>
    .menuItem {
        display: inline-block;
    }

    .menuItem:hover {
        cursor: pointer;
    }

    .menuItemLabel {
        display: inline-block;
        padding: 4px 8px;
    }

    .menuItemLabel:hover,
    .menuItemLabel.selected {
        color: white;
        background-color: black;
    }
    .menuItemPopover {
        background-color: white;
        box-shadow: 1px 1px 0 black;
        border: 2px solid black;
        position: absolute;
        top: 22px;
        left: 0;
        display: none;
    }

    .menuItemPopover.selected {
        display: inline-block;
    }
</style>
