<script lang="ts">
    import {onMount} from 'svelte'

    let item: any = {}
    let loaded = false

    onMount( async () => {
        const resp = await fetch(`https://swapi.dev/api/people/1/`)
        item = await resp.json()
        loaded = true
    })
</script>

{#if loaded}
<h1>{item.name}</h1>
<div class="bg-white rounded p-3">
    <p>Height: {item.height} cm</p>
    <p>Mass: {item.mass} kg</p>
    <p>Birth year: {item.birth_year}</p>
</div>
{:else}
{/if}