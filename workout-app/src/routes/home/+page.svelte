<script lang="ts">
	import '../../app.css';

	export let data;
</script>

{#if data.user}
	<p>Welcome, {data.user.name}!</p>
	<p>Welcome, {data.user.email}!</p>
{/if}
