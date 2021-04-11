<script lang="ts">
    import {notifications} from '$lib/notifications'
</script>

<div>
    {$notifications.map( n => n.msg).join('-')}
</div>