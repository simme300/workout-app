// place files you want to import through the `$lib` alias in this folder.
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { env } from '$env/dynamic/private';

const sql = neon(env.DATABASE_URL!);
export const db = drizzle({ client: sql });
