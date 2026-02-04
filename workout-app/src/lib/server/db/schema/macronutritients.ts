import { pgTable, numeric, uuid } from 'drizzle-orm/pg-core';
import { foodTable } from './food';

export const macroTable = pgTable('macros', {
	id: uuid().primaryKey().defaultRandom(),
	foodId: uuid('food_id').references(() => foodTable.id),
	fat: numeric({ scale: 5, precision: 2 }),
	carbs: numeric({ scale: 5, precision: 2 }),
	protein: numeric({ scale: 5, precision: 2 })
});
