<script lang="ts" context="module">
    const wait = (ms: number) => new Promise( resolve => setTimeout(resolve, ms))

    async function getItems(page = 1) {
        await wait(1000)
        const resp = await fetch(`https://swapi.py4e.com/api/people/?page=${page}`)
        const data = await resp.json()
        const items = data.results
        items.forEach( item => {
            item.height = parseInt(item.height)
            item.mass = parseInt(item.mass)
            item.id = item.url.split('/')[5]
        })
        return items
    }

    export async function load() {
        return {
            props: {
                items: await getItems()
            }
        }
    }
</script>

<script lang="ts">
    import TableSort from '$lib/TableSort.svelte'
    import { goto } from '$app/navigation'

    export let items=[]

    setTimeout( async () => { items = await getItems(2)}, 5000 )
</script>
  
<h1 class="font-sans">People (load)</h1>

<div class="flex flex-col">
    <div class="-my-2 overflow-x-auto">
      <div class="py-2 align-middle inline-block min-w-full">
        <div class="shadow overflow-hidden border border-b-2 border-gray-200 sm:rounded-lg">
          <TableSort {items}>
              <tr slot="thead">
                <th data-sort="name" data-sort-initial scope="col">
                  Name
                </th>
                <th data-sort="height" scope="col">
                  Height
                </th>
                <th data-sort="birth_year" scope="col">
                  Birth year
                </th>
              </tr>
              <tr class="hover:bg-primary-light cursor-pointer" slot="tbody" let:item on:click={() => goto(`/peopleLoad/${item.id}`)}>
                <td>
                    {item.name}
                </td>
                <td>
                    {item.height}
                </td>
                <td>
                  <span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                    {item.birth_year}
                  </span>
                </td>
              </tr>
  
              <!-- More items... -->
            <!-- </tbody> -->
            </TableSort>
        </div>
      </div>
    </div>
    <a href="#" on:click={() => goto('/peopleLoad/unknown')}>Unknown id</a>
</div>
