import { pgTable, varchar, uuid, numeric, smallint, index } from 'drizzle-orm/pg-core';
import { workoutTable } from './workout';

export const exerciseTable = pgTable(
	'exercise',
	{
		id: uuid().primaryKey().defaultRandom(),
		workoutId: uuid('workout_id').references(() => workoutTable.id),
		name: varchar({ length: 256 }),
		reps: smallint(),
		partial_reps: smallint(),
		total_reps: numeric({ scale: 4, precision: 2 })
	},
	(table) => [index('name_index').on(table.name), index('reps_index').on(table.total_reps)]
);
