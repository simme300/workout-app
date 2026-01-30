// place files you want to import through the `$lib` alias in this folder.
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import { config } from 'dotenv';

config({ path: '.env' }); // or .env.local

const sql = neon(process.env.DATABASE_URL!);
export const db = drizzle({ client: sql });
