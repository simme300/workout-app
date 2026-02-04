import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';
import { mealTable } from './meal';

export const foodTable = pgTable('food', {
	id: uuid().primaryKey().defaultRandom(),
	mealId: uuid('meal_id').references(() => mealTable.id),
	name: varchar({ length: 256 })
});
