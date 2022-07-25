<script>
    import MenuItem from "./MenuItem.svelte";
    import Menu from "./Menu.svelte";
    import ToolSet from "./ToolSet.svelte";
    import MyButton from "./MyButton.svelte";
    import MyField from "./MyField.svelte";
    import { myStack } from "./stores";

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
