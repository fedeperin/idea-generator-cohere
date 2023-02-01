import { writable } from 'svelte/store'

export const cohereResponse = writable(false)
export const promptIndex = writable(0)
export const buttonDisabled = writable(false)
export const randomness = writable(1.5)