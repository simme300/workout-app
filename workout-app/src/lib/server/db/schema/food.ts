import { pgTable, uuid, varchar, index } from 'drizzle-orm/pg-core';
import { mealTable } from './meal';

export const foodTable = pgTable(
	'food',
	{
		id: uuid().primaryKey().defaultRandom(),
		mealId: uuid('meal_id').references(() => mealTable.id),
		name: varchar({ length: 256 })
	},
	(table) => [index('name_index').on(table.name)]
);
