import { betterAuth } from 'better-auth';
import { username } from 'better-auth/plugins';
import { drizzleAdapter } from '@better-auth/drizzle-adapter';
import { db } from '$lib/server/db';
import * as schema from '$lib/server/db/schema/auth';

export const auth = betterAuth({
	database: drizzleAdapter(db, {
		provider: 'pg',
		schema
	}),
	emailAndPassword: {
		enabled: true,
		autoSignIn: true
	},
	plugins: [
		username({
			usernameValidator: (username) => {
				if (username === 'admin') {
					return false;
				}
				return true;
			},
			minUsernameLength: 3,
			maxUsernameLength: 30,
			displayUsernameValidator: (displayUsername) => {
				// Allow only alphanumeric characters, underscores, and hyphens
				return /^[a-zA-Z0-9_-]+$/.test(displayUsername);
			}
		})
	]
});
