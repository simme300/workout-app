import { auth } from '$lib/server/auth';
import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';

export const actions = {
	login: async ({ request, cookies }) => {
		const data = await request.formData();
		const email = String(data.get('email')) || '';
		const password = String(data.get('password')) || '';

		const response = await auth.api.signInEmail({
			body: { email, password },
			headers: request.headers,
			asResponse: true
		});

		if (!response.ok) {
			return { success: false, error: 'Invalid email or password' };
		}

		// Forward session cookies from better-auth's response to the browser
		const setCookieHeaders = response.headers.getSetCookie();
		console.table(setCookieHeaders);
		for (const cookieStr of setCookieHeaders) {
			const parts = cookieStr.split(';').map((p) => p.trim());
			const [name, ...valueParts] = parts[0].split('=');
			const value = valueParts.join('=');

			const options: Parameters<typeof cookies.set>[2] = { path: '/' };
			for (const part of parts.slice(1)) {
				const [key, val] = part.split('=');
				const k = key.trim().toLowerCase();
				if (k === 'httponly') options.httpOnly = true;
				else if (k === 'secure') options.secure = true;
				else if (k === 'samesite')
					options.sameSite = val?.trim().toLowerCase() as 'lax' | 'strict' | 'none';
				else if (k === 'path') options.path = val?.trim();
				else if (k === 'max-age') options.maxAge = parseInt(val?.trim());
			}

			cookies.set(name.trim(), decodeURIComponent(value.trim()), options);
		}

		throw redirect(303, '/home');
	}
} satisfies Actions;
