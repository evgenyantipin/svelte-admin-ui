<script lang="ts">
	import {notifyInfo} from '$lib/notifications'

	function addNotification() {
		notifyInfo('Hello')
	}
</script>

<main>
    <h1>Test</h1>
    <a href="/">Index</a>
	<a on:click={addNotification} href="#">Notify</a>
</main>

<style lang="scss">
	main {
		@apply text-center;
		@apply p-4;
		@apply mx-auto;
	}

	h1 {
		@apply text-red-600;
		@apply uppercase;
		@apply text-6xl;
		@apply font-thin;
		@apply leading-tight;
		@apply my-16 mx-auto;
		@apply max-w-xs;
	}

	p {
		@apply max-w-xs;
		@apply my-8 mx-auto;
		@apply leading-snug;
	}

	@screen sm {
		h1 {
			@apply max-w-none;
		}

		p {
			@apply max-w-none;
		}
	}
</style>