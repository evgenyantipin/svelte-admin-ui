import { writable } from 'svelte/store';

export const notifications = writable([]);

export function notifyInfo(msg: string) {
	const notification = { msg, type: 'info' };
	notifications.update((old) => [...old, notification]);
	setTimeout(() => notifications.update((old) => [...old.filter((n) => n !== notification)]), 3000);
}

export function notifyError(msg: string) {
	const notification = { msg, type: 'error' };
	notifications.update((old) => [...old, notification]);
	setTimeout(() => notifications.update((old) => [...old.filter((n) => n !== notification)]), 3000);
}
