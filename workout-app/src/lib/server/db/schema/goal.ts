import { pgTable, uuid, text } from 'drizzle-orm/pg-core';

export const goalTable = pgTable('goals', {
	id: uuid(),
	description: text()
});
