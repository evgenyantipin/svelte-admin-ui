<script lang="ts">
    import {page} from '$app/stores'

    export let title
    export let path
    export let re = undefined
    let reAuto: RegExp
    $: reAuto = re ? re : new RegExp(`^${path}\\b`)
</script>

<li class:active={$page.path.match( reAuto )}>
    <a  href="{path}">{title}</a>
</li>

<style lang="scss">
    li {
        @apply pl-2;
    }
    .active {
        @apply bg-primary-light
    }
</style>