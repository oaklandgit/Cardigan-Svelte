<script>
    import MenuItem from "./MenuItem.svelte";
    import Menu from "./Menu.svelte";
    import ToolSet from "./ToolSet.svelte";

    function createButton() {
        alert("I made a button!");
    }

    export let items = [
        {
            id: "apple",
            label: "",
            component: Menu,
            items: [{ label: "uno" }, { label: "dos" }, { label: "tres" }],
        },
        { id: "file", label: "File", component: Menu },
        { id: "edit", label: "Edit", component: Menu },
        { id: "go", label: "Go", component: Menu },
        { id: "tools", label: "Tools", component: ToolSet },
        {
            id: "objects",
            label: "Objects",
            component: Menu,
            items: [
                { label: "Button Info…", disabled: true },
                { label: "Field Info…", disabled: true },
                { label: "Card Info…" },
                { label: "Bkgnd Info…" },
                { label: "Stack Info…" },
                { label: "Bring Closer", section: true, shortcut: "⌘+" },
                { label: "Send Farther", shortcut: "⌘-" },
                {
                    label: "New Button",
                    section: true,
                    callback: () => {
                        createButton();
                    },
                },
                { label: "New Field" },
                { label: "New Background" },
            ],
        },
        { id: "styles", label: "Styles", component: Menu },
    ];
</script>

<ul>
    {#each items as { id, label, component, items } ({ id })}
        <li {id}>
            <MenuItem {label}>
                <svelte:component this={component} {items} />
            </MenuItem>
        </li>
    {/each}
</ul>

<style>
    @font-face {
        font-family: Chicago;
        src: url(/assets/ChicagoFLF.ttf);
    }
    ul {
        list-style: none;
        background-color: white;
        border-bottom: 1px solid black;
        border-radius: 12px 12px 0 0;
        margin: 0;
        padding: 0 0 0 8px;
        font-weight: bold;
        font-size: 16px;
        font-family: Chicago;
    }

    li {
        display: inline;
        position: relative;
    }
</style>
