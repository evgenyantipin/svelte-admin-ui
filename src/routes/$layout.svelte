<script>
	import "../global.css";
	import Menu from "$lib/Menu.svelte";
</script>

<div class="h-16 w-screen bg-blue-600 fixed z-10">
	<div class="flex flex-row">
		<div class="flex-0 w-32 h-16 bg-red-600">y</div>
		<div class="flex-grow">Heading</div>
		<div class="flex-0">Test</div>
	</div>
</div>

<div class="flex flex-row relative">
	<div class="flex-0 w-32 bg-red-300 overflow-scroll fixed h-full">
		<div class="h-16"></div>
		<Menu/>
	</div>
	<div class="flex-grow overflow-scroll">
		<div class="h-16"></div>
		<slot />
	</div>
		
</div>

