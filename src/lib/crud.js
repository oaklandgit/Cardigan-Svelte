import axios from "axios";
import { myStack } from '../stores';
import { backgroundDB } from "./constants";

// const endpoint = "http://localhost:4000/stack/";

export async function createButton() {

    const newButton = {
        id: crypto.randomUUID(),
        element: "button",
        label: "New Button",
        x: 100,
        y: 100,
        width: 120,
        height: 40,
        created: + new Date(),
        updated: + new Date()
    };

    const response = await axios.post(backgroundDB, newButton);

    myStack.update(currentStack => {
        return [...currentStack, newButton];
    });

}

export async function createField() {

    const newField = {
        id: crypto.randomUUID(),
        element: "field",
        content: "Empty",
        x: 100,
        y: 100,
        width: 120,
        height: 40,
        created: + new Date(),
        updated: + new Date()
    };

    const response = await axios.post(backgroundDB, newField);

    myStack.update(currentStack => {
        return [...currentStack, newField];
    });

}

