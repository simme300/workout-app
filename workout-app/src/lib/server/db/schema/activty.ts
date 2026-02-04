import { pgTable, uuid, pgEnum, interval, index } from 'drizzle-orm/pg-core';
import { workoutTable } from './workout';

export const activitEnum = pgEnum('activity', ['Weightlifting', 'walking']);

export const activityTable = pgTable(
	'activity',
	{
		id: uuid().primaryKey().defaultRandom(),
		workoutId: uuid('workout_id').references(() => workoutTable.id),
		name: activitEnum(),
		duration: interval({ fields: 'hour to second' })
	},
	(table) => [index('name_idx').on(table.name)]
);
