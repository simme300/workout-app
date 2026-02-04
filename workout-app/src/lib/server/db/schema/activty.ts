import { pgTable, uuid, pgEnum } from 'drizzle-orm/pg-core';
import { workoutTable } from './workout';

export const activitEnum = pgEnum('activity', ['Weightlifting', 'walking']);

export const activityTable = pgTable('activity', {
	id: uuid().primaryKey().defaultRandom(),
	workoutId: uuid('workout_id').references(() => workoutTable.id),
	name: activitEnum()
});
