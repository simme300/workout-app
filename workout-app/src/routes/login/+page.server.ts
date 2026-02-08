import { auth } from '$lib/server/auth';
import type { Actions } from './$types';

export const actions = {
	login: async ({ request }) => {
		const data = await request.formData();
		const email = String(data.get('email')) || '';
		const password = String(data.get('password')) || '';

		const result = await auth.api.signInEmail({
			body: { email, password },
			headers: request.headers
		});

		if (!result) {
			return { success: false, error: 'Invalid email or password' };
		}

		return { success: true };
	}
} satisfies Actions;
