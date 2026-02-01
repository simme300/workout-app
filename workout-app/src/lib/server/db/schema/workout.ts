import { pgTable, varchar, timestamp, pgEnum, uuid, interval } from 'drizzle-orm/pg-core';

export const dayEnum = pgEnum('day', ['push', 'pull', 'legs']);
export const weekDayEnum = pgEnum('weekday', ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']);

export const workoutTable = pgTable('workouts', {
	id: uuid(),
	title: varchar({ length: 256 }),
	duration: interval({ fields: 'hour to second' }),
	day: dayEnum(),
	weekday: weekDayEnum(),
	created_at: timestamp().defaultNow()
});
