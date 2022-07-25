<script>
    import MenuItem from "./MenuItem.svelte";
    import Menu from "./Menu.svelte";
    import ToolSet from "./ToolSet.svelte";

    import MyButton from "../widgets/MyButton.svelte";
    import MyField from "../widgets/MyField.svelte";
    import { myStack } from "../stores";

    function createButton() {
        $myStack = [
            ...$myStack,
            {
                element: MyButton,
                props: {
                    label: "untitled",
                    x: 200,
                    y: 400,
                },
            },
        ];
        // console.log($myStack);
    }

    function createField() {
        $myStack = [
            ...$myStack,
            {
                element: MyField,
                props: {
                    label: "untitled",
                    content: "empty",
                    x: 100,
                    y: 300,
                },
            },
        ];
        // console.log($myStack);
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
                { label: "Bring Closer", section: true, shortcut: "⌘+" },
                { label: "Send Farther", shortcut: "⌘-" },
                {
                    label: "New Button",
                    section: true,
                    callback: () => {
                        createButton();
                    },
                },
                {
                    label: "New Field",
                    callback: () => {
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
    @font-face {
        font-family: Chicago;
        src: url(/assets/ChicagoFLF.ttf);
    }

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
