import axios from "axios";
import { myStack } from '../stores';

const endpoint = "http://localhost:4000/stack/";

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

    const response = await axios.post(endpoint, newButton);

    myStack.update(currentStack => {
        return [newButton, ...currentStack];
    });

}

export async function saveButton(buttonId, newX, newY, newWidth, newHeight) {
    await axios.patch(endpoint + buttonId, {
        x: newX,
        y: newY,
        width: newWidth,
        height: newHeight,
        updated: +new Date(),
    });

}