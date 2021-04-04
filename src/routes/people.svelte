<script lang="ts" context="module">
    export async function load({fetch}) {
        const resp = await fetch('https://swapi.dev/api/people')
        const data = await resp.json()
        const items = data.results
        items.forEach( item => {
            item.height = parseInt(item.height)
            item.mass = parseInt(item.mass)
            item.id = item.url.split('/')[5]
        })
        return {
            props: {
                items
            }
        }
    }
</script>

<script lang="ts">
    import TableSort from '$lib/TableSort.svelte'
    import {onMount} from 'svelte'
    import { goto } from '$app/navigation'

    export let items=[]
</script>
  
<h1>People</h1>
<div class="bg-white rounded p-3">
<TableSort class="min-w-full" {items}>
    <tr class="text-left" slot="thead">
        <th data-sort="name" data-sort-initial>Name</th>
        <th data-sort="height">Height</th>
        <th data-sort="birth_year">Birth year</th>
    </tr>
    <tr on:click={() => goto(`/people/${item.id}`)} class="hover:bg-primary-light cursor-pointer" slot="tbody" let:item>
        <td >{item.name}</td>
        <td >{item.height}</td>
        <td >{item.birth_year}</td>
    </tr>
</TableSort>
</div>

