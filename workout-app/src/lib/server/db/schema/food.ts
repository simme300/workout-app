import { pgTable, uuid, varchar } from 'drizzle-orm/pg-core';

export const foodTable = pgTable('macros', {
	id: uuid(),
	name: varchar({ length: 256 })
});
