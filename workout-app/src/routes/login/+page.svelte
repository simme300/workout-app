<script lang="ts">
	let email: string = $state('');
	let password: string = $state('');
</script>

<h1>Login page</h1>

<form method="POST" action="?/login">
	<label for="email">Email:</label>
	<input type="text" name="email" placeholder="yourmail@mail.com" bind:value={email} required />
	<label for="password">Password:</label>
	<input type="password" name="password" bind:value={password} required />

	<button formaction="?/login">Login</button>
</form>
