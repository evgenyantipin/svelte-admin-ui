<script lang="ts" context="module">
    async function getItems(page = 1) {
        const resp = await fetch(`https://swapi.dev/api/people/?page=${page}`)
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
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
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
  </div>

<a href="/peopleLoad/X">No such id</a>

