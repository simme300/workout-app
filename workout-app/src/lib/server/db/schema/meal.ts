import { pgEnum, pgTable, uuid, time, smallint } from 'drizzle-orm/pg-core';

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
	id: uuid(),
	type: mealEnum().notNull(),
	number: smallint(),
	time: time()
});
