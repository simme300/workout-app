import { pgTable, varchar, uuid, numeric, smallint, index, pgEnum } from 'drizzle-orm/pg-core';
import { workoutTable } from './workout';

export const failureEnum = pgEnum('failure', ['F', 'failure']);

export const exerciseTable = pgTable(
	'exercise',
	{
		id: uuid().primaryKey().defaultRandom(),
		workoutId: uuid('workout_id').references(() => workoutTable.id),
		name: varchar({ length: 256 }),
		reps: smallint(),
		failure: failureEnum(),
		partial_reps: smallint(),
		total_reps: numeric({ scale: 4, precision: 2 })
	},
	(table) => [index('exercise_name_index').on(table.name), index('exercise_reps_index').on(table.total_reps)]
);
