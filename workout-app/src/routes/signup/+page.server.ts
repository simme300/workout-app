import { auth } from '$lib/server/auth';
import type { Actions } from './$types';

export const actions = {
	signup: async ({ request }) => {
		const data = await request.formData();
		const name = String(data.get('username')) || '';
		const email = String(data.get('email')) || '';
		const password = String(data.get('password')) || '';

		const result = await auth.api.signUpEmail({
			body: { name, email, password },
			asResponse: true
		});

		if (!result.ok) {
			return { success: false, error: 'Signup failed' };
		}

		return { success: true };
	}
} satisfies Actions;
