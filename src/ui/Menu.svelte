<script>
    export let items = [
        { label: "Item 1", disabled: true, section: false },
        { label: "Item 2", disabled: true, section: false },
        { label: "Item 3", disabled: false, section: true },
        { label: "Item 4", disabled: false, section: false },
    ];
</script>

<ul class="menu">
    {#each items as { label, shortcut, section, disabled, callback }}
        {#if section}
            <hr />
        {/if}
        <li class="menuItem" class:disabled on:mouseup={callback}>
            {label}
            {#if shortcut}
                <span class="shortcut">{shortcut}</span>
            {/if}
        </li>
    {/each}
</ul>

<style>
    .menu {
        list-style: none;
        padding: 0;
        min-width: 160px;
    }

    .menuItem {
        display: block;
        padding: 2px 6px;
        white-space: nowrap;
    }

    .menuItem.disabled {
        color: grey;
    }

    .menuItem:not(.disabled):hover {
        cursor: pointer;
        color: white;
        background-color: black;
    }

    .shortcut {
        float: right;
    }

    hr {
        padding: 0;
        margin: 4px 0;
        border-top: 1px dotted black;
    }
</style>
