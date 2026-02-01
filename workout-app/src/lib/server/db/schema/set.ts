import { pgTable, uuid, smallint, interval } from 'drizzle-orm/pg-core';

export const setTable = pgTable('set', {
	id: uuid(),
	number: smallint(),
	duration: interval({ fields: 'minute to second' })
});
