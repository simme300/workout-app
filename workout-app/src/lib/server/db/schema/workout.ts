import {
	pgTable,
	varchar,
	timestamp,
	pgEnum,
	uuid,
	interval,
	index,
	integer,
	text
} from 'drizzle-orm/pg-core';
import { user } from './user';

export const dayEnum = pgEnum('day', ['push', 'pull', 'legs']);
export const weekDayEnum = pgEnum('weekday', ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);

export const workoutTable = pgTable(
	'workouts',
	{
		id: uuid().primaryKey().defaultRandom(),
		userId: text('user_id')
			.notNull()
			.references(() => user.id),
		title: varchar({ length: 256 }),
		duration: interval({ fields: 'hour to second' }),
		day: dayEnum(),
		weekday: weekDayEnum(),
		created_at: timestamp().defaultNow(),
		count: integer()
	},
	(table) => [
		index('workout_duration_index').on(table.duration),
		index('workout_day_index').on(table.day)
	]
);
