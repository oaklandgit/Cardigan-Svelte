import { writable } from "svelte/store";

export const myStack = writable([]);
export const myData = writable([]);
export const selectedItems = writable([]);
export const appMode = writable('browse');
