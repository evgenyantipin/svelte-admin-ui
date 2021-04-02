<script>
	import "../global.css";
	import Menu from "$lib/Menu.svelte";
// https://stackoverflow.com/questions/57671255/keeping-one-column-fixed-while-th-other-scrolls
// https://jsfiddle.net/JHeth/d8vj6ncg/19/
</script>

<div id="app" class="h-screen flex flex-col overflow-hidden">
	<!-- Fixed top nav -->
	<nav class="h-16 flex flex-none items-center justify-center bg-primary-light">
		<div class="flex-0 flex items-center w-40 h-full sm:w-64 bg-red-600 text-xl">
			<div class="p-2">test-system</div>
		</div>
		<div class="flex-grow p-2 text-xl">Heading</div>
		<div class="flex-0 p-3 bg-green-500 mr-3 rounded">Test</div>
	</nav>
	<!-- Main content -->
	<div class="flex-1 flex overflow-hidden">
	  <div class="flex-0 flex bg-gray-100">
		<div class="flex-1 overflow-y-auto bg-gray-600 w-40 sm:w-64">
		  <Menu/>
	    </div>
	  </div>
	  <!-- Scroll wrapper -->
	  <div class="flex-1 flex bg-gray-100">
		<!-- Scrollable container -->
		<div class="px-6 py-4 flex-1 overflow-y-auto">
		  <!-- Your content -->
			<slot/>
		</div>
	  </div>
	</div>
  
  </div>
