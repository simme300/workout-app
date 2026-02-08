<script lang="ts">
	let name: string = $state('');
	let email: string = $state('');
	let password: string = $state('');
</script>

<form method="POST" action="?/signup">
	<label for="username">Username: </label>
	<input type="text" name="username" placeholder="enter username" required bind:value={name} />

	<label for="email">Email: </label>
	<input type="email" name="email" placeholder="example@mail.com" bind:value={email} required />

	<label for="password">password: </label>
	<input type="password" name="password" bind:value={password} required />

	<button formaction="?/signup">Create Account</button>
	<p>Already have an account?</p>
	<p>Sign in here: <a href="/login">Login page</a></p>
</form>
