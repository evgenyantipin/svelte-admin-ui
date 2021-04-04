<script lang="ts" context="module">
    export async function load({page, fetch}) {
        console.log('load')
        const resp = await fetch(`https://swapi.dev/api/people/${page.params.id}/`)
        const item = await resp.json()
        return {
            props: {
                item
            }
        }
    }
</script>

<script lang="ts">
    export let item: any = {};
</script>

<h1>{item.name}</h1>
<div class="bg-white rounded p-3">
    <p>Height: {item.height} cm</p>
    <p>Mass: {item.mass} kg</p>
    <p>Birth year: {item.birth_year}</p>
</div>
