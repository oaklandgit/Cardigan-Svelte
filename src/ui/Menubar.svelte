<script>
    import MenuItem from "./MenuItem.svelte";
    import Menu from "./Menu.svelte";
    import ToolSet from "./ToolSet.svelte";

    import MyButton from "../widgets/MyButton.svelte";
    import MyField from "../widgets/MyField.svelte";
    import { myStack, appMode, selectedItems } from "../stores";
    import { createButton, createField } from "../lib/crud.js";

    function reorderTo(distance) {
        alert("reorder");
        // const i = $myStack.findIndex((item) => {
        //     return item.id === selectedItems[0];
        // });

        // $myStack = [
        //     ...$myStack.slice(0, i - 2),
        //     ...$myStack[i],
        //     ...$myStack[i - 1],
        //     ...$myStack.slice(i + 1, $myStack.length),
        // ];
    }

    export let items = [
        {
            id: "apple",
            label: "",
            component: Menu,
            items: [{ label: "uno" }, { label: "dos" }, { label: "tres" }],
        },
        { id: "file", label: "File", component: Menu },
        {
            id: "edit",
            label: "Edit",
            component: Menu,
            items: [
                { label: "Undo", shortcut: "⌘Z" },
                { label: "Cut", shortcut: "⌘X", section: true },
                { label: "Copy", shortcut: "⌘C" },
                { label: "Past", shortcut: "⌘V" },
                { label: "Clear" },
                { label: "New Card", shortcut: "⌘N", section: true },
                { label: "Delete Card" },
                { label: "Cut Card" },
                { label: "Copy Card" },
                {
                    label: "Text Style…",
                    shortcut: "⌘T",
                    section: true,
                    disabled: true,
                },
                { label: "Background", shortcut: "⌘B" },
                { label: "Icon", shortcut: "⌘I" },
            ],
        },
        {
            id: "go",
            label: "Go",
            component: Menu,
            items: [
                { label: "Back", shortcut: "⌘~" },
                { label: "Home", shortcut: "⌘H" },
                { label: "Help", shortcut: "⌘?" },
                { label: "Recent", shortcut: "⌘R" },
                { label: "First", shortcut: "⌘1", section: true },
                { label: "Previous", shortcut: "⌘2" },
                { label: "Next", shortcut: "⌘3" },
                { label: "Last", shortcut: "⌘4" },
                { label: "Find…", shortcut: "⌘F", section: true },
                { label: "Message", shortcut: "⌘M" },
                { label: "Scroll", shortcut: "⌘E" },
                { label: "Next Window", shortcut: "⌘L", disabled: true },
            ],
        },
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
                {
                    label: "Bring Closer",
                    section: true,
                    shortcut: "⌘+",
                    callback: () => {
                        reorderTo(-1);
                    },
                },
                {
                    label: "Send Farther",
                    shortcut: "⌘-",
                    callback: () => {
                        reorderTo(1);
                    },
                },
                {
                    label: "New Button",
                    section: true,
                    callback: () => {
                        $appMode = "button";
                        createButton();
                    },
                },
                {
                    label: "New Field",
                    callback: () => {
                        $appMode = "field";
                        createField();
                    },
                },
                { label: "New Background" },
            ],
        },
        { id: "styles", label: "Styles", component: Menu },
    ];
</script>

<div>
    <ul>
        {#each items as { id, label, component, items } ({ id })}
            <li {id}>
                <MenuItem {label}>
                    <svelte:component this={component} {items} />
                </MenuItem>
            </li>
        {/each}
    </ul>
</div>

<style>
    div {
        position: absolute;
        top: 2px;
        left: 2px;
        width: calc(100% - 4px);
        background-color: white;
        border-bottom: 1px solid black;
        border-radius: 8px 8px 0 0;
    }
    ul {
        list-style: none;

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
