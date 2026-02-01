import { pgTable, varchar, uuid, numeric, smallint } from 'drizzle-orm/pg-core';

export const exerciseTable = pgTable('exercise', {
	id: uuid(),
	name: varchar({ length: 256 }),
	reps: smallint(),
	partial_reps: smallint(),
	total_reps: numeric({ scale: 4, precision: 2 })
});
