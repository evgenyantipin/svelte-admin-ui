<script lang="ts">
    import {page} from '$app/stores'

    let currPage;
</script>

<div class="">Test pages</div>
<ul>
    <li class:active={$page.path==='/'}><a href="/">Index</a></li>
    <li class:active={$page.path==='/colors'}><a href="/colors">Colors</a></li>
    <li class:active={$page.path.match( /^\/people\b/)}><a href="/people">People</a></li>
    <li class:active={$page.path.startsWith( '/peopleLoad')}><a href="/peopleLoad">People load</a></li>
    <li class:active={$page.path==='/test'}><a href="/test">Test</a></li>
    <li class:active={$page.path==='/test'}><a href="/test">Test</a></li>
    <li class:active={$page.path==='/test'}><a href="/test">Test</a></li>
    <li class:active={$page.path==='/test'}><a href="/test">Test</a></li>
    <li class:active={$page.path==='/test'}><a href="/test">Test</a></li>
    <li class:active={$page.path==='/test'}><a href="/test">Test</a></li>
    <li class:active={$page.path==='/test'}><a href="/test">Test</a></li>
    <li class:active={$page.path==='/test'}><a href="/test">Test</a></li>
    
</ul>

<p>
    Path: {$page.path}
</p>

<style lang="scss">
    li {
        @apply pl-2;
    }
    .active {
        @apply bg-primary-light
    }
</style>