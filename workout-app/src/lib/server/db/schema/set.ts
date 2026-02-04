import { pgTable, uuid, smallint, interval } from 'drizzle-orm/pg-core';
import { exerciseTable } from './exercise';

export const setTable = pgTable('set', {
	id: uuid().primaryKey().defaultRandom(),
	exerciseId: uuid('exercise_id').references(() => exerciseTable.id),
	number: smallint(),
	duration: interval({ fields: 'minute to second' })
});
