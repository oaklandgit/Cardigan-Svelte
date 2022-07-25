import { writable } from "svelte/store";

export const myStack = writable([]);
export const myData = writable([]);
export let appMode = writable('browse');