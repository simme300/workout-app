import {
	pgTable,
	uuid,
	integer,
	varchar,
	text,
	json,
	numeric,
	smallint
} from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: uuid().primaryKey().defaultRandom(),
	age: integer('age'),
	name: varchar({ length: 256 }),
	email: text().notNull(),
	address: json(),
	phone: numeric(),
	weight: smallint(),
	height: smallint()
});
