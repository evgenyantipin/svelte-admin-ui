<script lang="ts" context="module">
export async function load({page, fetch}) {
    const res = await fetch(`https://swapi.py4e.com/api/people/${page.params.id}/`)
    if(res.ok) {
        const item = await res.json()
        return {
            props: { item }
        }
    }

    return {
        status: res.status,
        error: new Error(`Could not load url`)
    };
}
</script>

<script lang="ts">
    export let item;
</script>

<h1>{item.name} (load)</h1>
<div class="bg-white rounded p-3">
    <p>Height: {item.height} cm</p>
    <p>Mass: {item.mass} kg</p>
    <p>Birth year: {item.birth_year}</p>
</div>
