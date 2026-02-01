import {
	pgTable,
	serial,
	integer,
	varchar,
	text,
	json,
	numeric,
	smallint
} from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: serial('id').primaryKey(),
	age: integer('age'),
	name: varchar({ length: 256 }),
	email: text().notNull(),
	address: json(),
	phone: numeric(),
	weight: smallint(),
	height: smallint()
});
