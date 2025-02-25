<script>
    const CLASSNAME_TABLE = 'tablesort'
    const CLASSNAME_SORTABLE = 'sortable'
    const CLASSNAME_ASC = 'ascending'
    const CLASSNAME_DESC = 'descending'

    import { onMount } from 'svelte'
    import {
        sortFunction,
        compareStrings,
        compareNumbers,
    } from './generator-sort'
    export let items
    let className = ''
    export { className as class }

    let thead
    let sortOrder = [[]]

    $: sortedItems = sorted([...items], sortOrder)

    const sorted = function(arr, sortOrder) {
        arr.sort(
            sortFunction(function*(a, b) {
                for (let [fieldName, r] of sortOrder) {
                    const reverse = r === 0 ? 1 : -1
                    if (typeof a[fieldName] === 'number') {
                        yield reverse *
                            compareNumbers(a[fieldName], b[fieldName])
                    } else {
                        yield reverse *
                            compareStrings(a[fieldName], b[fieldName])
                    }
                }
            })
        )

        return arr
    }

    function updateSortOrder(th, push) {
        const fieldName = th.dataset.sort
        if (push) {
            if (sortOrder[sortOrder.length - 1][0] === fieldName) {
                sortOrder[sortOrder.length - 1] = [
                    fieldName,
                    (sortOrder[sortOrder.length - 1][1] + 1) % 2,
                ]
            } else {
                sortOrder = [...sortOrder, [fieldName, 0]]
            }
        } else {
            if (sortOrder.length === 1 && sortOrder[0][0] === fieldName) {
                sortOrder[0] = [fieldName, (sortOrder[0][1] + 1) % 2]
            } else {
                resetClasses()
                sortOrder = [[fieldName, 0]]
            }
        }
        th.className =
            th.dataset.orgClass + ' ' + CLASSNAME_SORTABLE +
            ' ' +
            (sortOrder[sortOrder.length - 1][1]
                ? CLASSNAME_DESC
                : CLASSNAME_ASC)
    }

    function resetClasses() {
        const th = thead.getElementsByTagName('th')
        for (let i = 0; i < th.length; i++) {
            if (th[i].dataset.sort) {
                th[i].className = th[i].dataset.orgClass + ' ' + CLASSNAME_SORTABLE
            }
        }
    }

    onMount(() => {
        const th = thead.getElementsByTagName('th')
        for (let i = 0; i < th.length; i++) {
            if (th[i].dataset.sort) {
                th[i].dataset.orgClass = th[i].className
                th[i].className = th[i].dataset.orgClass + ' ' + CLASSNAME_SORTABLE
                th[i].onclick = (event) =>
                    updateSortOrder(th[i], event.shiftKey)
            }
            if (th[i].dataset.sortInitial === 'descending') {
                th[i].className = th[i].dataset.orgClass + ' ' + CLASSNAME_SORTABLE + ' ' + CLASSNAME_DESC
                sortOrder = [...sortOrder, [th[i].dataset.sort, 1]]
            } else if (th[i].dataset.sortInitial != undefined) {
                th[i].className = th[i].dataset.orgClass + ' ' + CLASSNAME_SORTABLE + ' ' + CLASSNAME_ASC
                sortOrder = [...sortOrder, [th[i].dataset.sort, 0]]
            }
        }
    })
</script>

<style lang="scss">
    thead :global(th.sortable) {
        cursor: pointer;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
    }
</style>

<table class="{CLASSNAME_TABLE} {className}">
    <thead bind:this={thead}>
        <slot name="thead" />
    </thead>
    <tbody>
        {#each sortedItems as item}
            <slot name="tbody" {item} />
        {/each}
    </tbody>
    <tfoot>
        <slot name="tfoot" />
    </tfoot>
</table>

