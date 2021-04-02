<script>
	import "../global.css";
	import Menu from "$lib/Menu.svelte";
// https://stackoverflow.com/questions/57671255/keeping-one-column-fixed-while-th-other-scrolls
// https://jsfiddle.net/JHeth/d8vj6ncg/19/
</script>

<div id="app" class="h-screen flex flex-col overflow-hidden">
	<!-- Fixed top nav -->
	<nav class="h-16 flex flex-none items-center justify-between flex-wrap bg-gray-400">
		<div class="flex-0 w-40 sm:w-64 h-16 bg-red-600 p-3 self-center h-full text-xl font-mono"><span class="inline-block align-middle">test-system</span></div>
		<div class="flex-grow p-3">Heading</div>
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

  <!--

<div class="h-16 w-screen bg-blue-600 fixed z-10">
	<div class="flex flex-row">
	</div>
</div>

<div class="flex flex-row relative">
	<div class="flex-0 w-32 bg-red-300 overflow-scroll fixed h-full">
		<div class="h-16"></div>
		<Menu/>
	</div>
	<div class="flex-grow overflow-scroll fixed left-32">
		<div class="h-16"></div>
		<slot />
	</div>
		
</div>
  -->

