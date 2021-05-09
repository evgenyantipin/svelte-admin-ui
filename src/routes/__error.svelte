<script context="module">
	export function load({ error, status }) {
		return {
			props: { error, status }
		};
	}
</script>

<script>
	export let status;
	export let error;
</script>

<h1>{status}</h1>
<p>{error ? error.message : 'no message'}</p>