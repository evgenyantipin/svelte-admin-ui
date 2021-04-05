<script>
    import { slide } from 'svelte/transition'
    export let title
    export let show = false
</script>

<p class="cursor-pointer" on:click={() => (show = !show)}>{title}</p>
{#if show}
<div class="overflow-hidden" transition:slide={{ duration: 200 }}>
    <ul class="menu-list" >
        <slot />
    </ul>
</div>
{/if}
