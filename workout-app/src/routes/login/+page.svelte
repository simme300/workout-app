<script lang="ts">
	import '../../app.css';

	let email: string = $state('');
	let password: string = $state('');
</script>

<div class="login-wrapper">
	<h1>Login</h1>
	<form method="POST" action="?/login">
		<label for="email">Email:</label>
		<input type="text" name="email" placeholder="yourmail@mail.com" bind:value={email} required />
		<label for="password">Password:</label>
		<input type="password" name="password" bind:value={password} required />

		<button formaction="?/login">Login</button>
	</form>
</div>

<style>
	h1 {
		text-align: center;
		background-color: #493548;
		margin-bottom: 3rem;
		color: white;
		font-weight: bold;
	}

	.login-wrapper {
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
