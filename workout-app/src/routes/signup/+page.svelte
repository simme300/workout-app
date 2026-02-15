<script lang="ts">
	import '../../app.css';

	let name: string = $state('');
	let email: string = $state('');
	let password: string = $state('');
</script>

<div class="signup-wrapper">
	<h1>Register Account</h1>
	<form method="POST" action="?/signup">
		<label for="username">Username: </label>
		<input type="text" name="username" placeholder="enter username" required bind:value={name} />

		<label for="email">Email: </label>
		<input type="email" name="email" placeholder="example@mail.com" bind:value={email} required />

		<label for="password">Password: </label>
		<input type="password" name="password" bind:value={password} required />

		<button formaction="?/signup">Create Account</button>
		<p>Already have an account?</p>
		<p>Sign in here: <a href="/login">Login page</a></p>
	</form>
</div>

<style>
	h1 {
		text-align: center;
		color: white;
		margin-bottom: 2rem;
		font-weight: bold;
	}

	.signup-wrapper {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		height: 100vh;
		background-color: #493548;

		form {
			display: flex;
			flex-direction: column;
		}

		form > * {
			padding: 0.6rem;
			margin: 0.2rem;
			color: #a1e887;
			border-radius: 5px;
			font-size: larger;
		}
	}
	button {
		background-color: green;
		outline: none;
		border: none;
		color: white;

		&:hover {
			background-color: #a1e887;
			cursor: pointer;
			color: white;
		}
	}
</style>
