<script>
	import "../global.postcss";
	import MainMenu from "$lib/MainMenu/MainMenu.svelte";
	import Notifications from '$lib/DisplayNotifications.svelte';

	import { navigating } from '$app/stores'
	import { notifications } from "$lib/notifications";

	// Clear notifications on navigation
	navigating.subscribe( () => notifications.update( () => []) )

// import Fa from "svelte-fa/src/fa.svelte";
// import Index from "./peopleLoad/index.svelte";

// https://stackoverflow.com/questions/57671255/keeping-one-column-fixed-while-th-other-scrolls
// https://jsfiddle.net/JHeth/d8vj6ncg/19/
</script>

	<div id="app" class="h-screen flex flex-col overflow-hidden">
		<!-- Fixed top nav -->
		<nav class="h-16 flex flex-none items-center justify-center border-b">
			<div class="flex-0 flex items-center w-40 h-full sm:w-64 bg-primary-light text-xl">
				<div class="p-2">test-system</div>
			</div>
	
			<div class="flex-grow p-2"></div>
			<div class="flex-0 p-3 bg-green-500 mr-3 rounded">Test</div>
		</nav>
		<div class="flex-1 flex overflow-hidden">
			<!-- Sidebar -->
			<div class="flex-0 flex">
				<div class="flex-1 overflow-y-auto w-40 sm:w-64 border-r">
				<MainMenu/>
				</div>
			</div>
	
			<!-- Main -->
			<div class="flex-1 flex">
				<div class="px-6 py-4 flex-1 overflow-y-auto relative">
					<div style="opacity: {$navigating ? 100 : 0}; display: {$navigating ? 'block' : 'none'};"
					     class="fixed bottom-0 right-0 w-full h-full flex justify-center content-end pl-72 pt-24 p-8 transition-opacity duration-300 delay-200 ease-in">
						<svg style="opacity: {$navigating ? 100 : 0};" class="animate-spin h-full w-full" fill="none" viewBox="0 0 24 24">
							<circle class="opacity-10" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
							<path class="opacity-50" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
						</svg>	
					</div>
					<div class="z-10">
						<slot/>
					</div>
			
				</div>
			</div>
		</div>
		<Notifications />
	  </div>	
