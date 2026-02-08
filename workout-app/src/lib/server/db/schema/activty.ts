import { pgTable, uuid, pgEnum, interval, index, numeric } from 'drizzle-orm/pg-core';
import { workoutTable } from './workout';

export const activitEnum = pgEnum('activity_type', ['walking']);

export const activityTable = pgTable(
	'activity',
	{
		id: uuid().primaryKey().defaultRandom(),
		workoutId: uuid('workout_id').references(() => workoutTable.id),
		name: activitEnum(),
		duration: interval({ fields: 'hour to second' }),
		incline: numeric({ scale: 5, precision: 2 }),
		speed: numeric({ scale: 4, precision: 2 })
	},
	(table) => [index('name_idx').on(table.name)]
);
