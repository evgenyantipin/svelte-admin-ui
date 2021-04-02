<script lang="ts">
    import {page} from '$app/stores'

    let currPage;
</script>

<h2>Menu</h2>
<ul>
    <li><a class:active={$page.path==='/'} href="/">Index</a></li>
    <li><a class:active={$page.path==='/colors'} href="/colors">Colors</a></li>
    <li><a class:active={$page.path==='/test'} href="/test">Test</a></li>
    <li><a class:active={$page.path==='/test'} href="/test">Test</a></li>
    <li><a class:active={$page.path==='/test'} href="/test">Test</a></li>
    <li><a class:active={$page.path==='/test'} href="/test">Test</a></li>
    <li><a class:active={$page.path==='/test'} href="/test">Test</a></li>
    <li><a class:active={$page.path==='/test'} href="/test">Test</a></li>
    <li><a class:active={$page.path==='/test'} href="/test">Test</a></li>
    <li><a class:active={$page.path==='/test'} href="/test">Test</a></li>
    <li><a class:active={$page.path==='/test'} href="/test">Test</a></li>
    
</ul>

<p>
    Path: {$page.path}
</p>

<style lang="scss">
    .active {
        background-color: green;
    }
</style>