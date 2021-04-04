<script lang="ts">
  import TableSort from '$lib/TableSort.svelte'
  import {onMount} from 'svelte'

  let items = []

    onMount( async () => {
        const resp = await fetch('https://swapi.dev/api/people')
        const data = await resp.json()
        items = data.results
        items.forEach( item => {
            item.height = parseInt(item.height)
            item.mass = parseInt(item.mass)
        })
    })

</script>
<h1>People</h1>

<TableSort class="min-w-full" {items}>
    <tr class="text-left" slot="thead">
        <th data-sort="name" data-sort-initial>Name</th>
        <th data-sort="height">Height</th>
        <th data-sort="birth_year">Birth year</th>
    </tr>
    <tr on:click={() => console.log(item)} class="hover:bg-primary-light cursor-pointer" slot="tbody" let:item>
        <td >{item.name}</td>
        <td >{item.height}</td>
        <td >{item.birth_year}</td>
    </tr>
</TableSort>

