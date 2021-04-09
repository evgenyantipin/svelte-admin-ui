<script>
	import "../global.postcss";
	import MainMenu from "$lib/MainMenu/MainMenu.svelte";

	import {navigating} from '$app/stores'

// https://stackoverflow.com/questions/57671255/keeping-one-column-fixed-while-th-other-scrolls
// https://jsfiddle.net/JHeth/d8vj6ncg/19/
</script>

<div id="app" class="h-screen flex flex-col overflow-hidden">
	<!-- Fixed top nav -->
	<nav class="h-16 flex flex-none items-center justify-center border-b">
		<div class="flex-0 flex items-center w-40 h-full sm:w-64 bg-primary-light text-xl">
			<div class="p-2">test-system</div>
		</div>
		<div class="flex-grow p-2 text-xl">{$navigating ? 'loading' : 'ready'}</div>
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
			<div class="px-6 py-4 flex-1 overflow-y-auto">
				<slot/>
			</div>
		</div>
	</div>
  
  </div>
