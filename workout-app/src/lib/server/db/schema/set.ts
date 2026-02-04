import { pgTable, uuid, smallint, interval, index } from 'drizzle-orm/pg-core';
import { exerciseTable } from './exercise';

export const setTable = pgTable(
	'set',
	{
		id: uuid().primaryKey().defaultRandom(),
		exerciseId: uuid('exercise_id').references(() => exerciseTable.id),
		number: smallint(),
		duration: interval({ fields: 'minute to second' })
	},
	(table) => [index('number_index').on(table.number), index('duration_index').on(table.duration)]
);
