<script lang="ts">
    import {onMount} from 'svelte'
    import { page } from '$app/stores'

    let item: any = {};

    onMount( async () =>  {
        const resp = await fetch(`https://swapi.dev/api/people/${$page.params.id}/`)
        console.log(resp)
        item = await resp.json()
    })

</script>

<h1>{item.name}</h1>
<div class="bg-white rounded p-3">
    <p>Height: {item.height} cm</p>
    <p>Mass: {item.mass} kg</p>
    <p>Birth year: {item.birth_year}</p>
</div>
