import {
	pgTable,
	uuid,
	integer,
	varchar,
	text,
	json,
	numeric,
	smallint,
	index
} from 'drizzle-orm/pg-core';

export const user = pgTable(
	'user',
	{
		id: uuid().primaryKey().defaultRandom(),
		age: integer('age'),
		name: varchar({ length: 256 }),
		email: text().notNull(),
		address: json(),
		phone: numeric(),
		weight: smallint(),
		height: smallint()
	},
	(table) => [index('weigth_index').on(table.weight), index('name_index').on(table.name)]
);
