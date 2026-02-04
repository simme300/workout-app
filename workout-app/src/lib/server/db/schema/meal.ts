import { pgEnum, pgTable, uuid, time, smallint } from 'drizzle-orm/pg-core';
import { user } from './user';

export const mealEnum = pgEnum('mealtype', [
	'breakfast',
	'lunch',
	'brunch',
	'dinner',
	'evening',
	'snack',
	'fruit',
	'other'
]);

export const mealTable = pgTable('meals', {
	id: uuid().primaryKey().defaultRandom(),
	userId: uuid('user_id').references(() => user.id),
	type: mealEnum().notNull(),
	number: smallint(),
	time: time()
});
