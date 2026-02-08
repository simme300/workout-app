import { pgEnum, pgTable, uuid, time, smallint, text } from 'drizzle-orm/pg-core';
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
	userId: text('user_id')
		.notNull()
		.references(() => user.id),
	type: mealEnum().notNull(),
	number: smallint(),
	time: time()
});
