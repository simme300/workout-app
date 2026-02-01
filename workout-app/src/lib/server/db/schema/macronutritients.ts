import { pgTable, numeric, uuid } from 'drizzle-orm/pg-core';

export const macroTable = pgTable('macros', {
	id: uuid(),
	fat: numeric({ scale: 5, precision: 2 }),
	carbs: numeric({ scale: 5, precision: 2 }),
	protein: numeric({ scale: 5, precision: 2 })
});
