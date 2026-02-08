import { pgTable, uuid, varchar, text, integer, timestamp, index } from 'drizzle-orm/pg-core';
import { user } from './user';

export const progressPictureTable = pgTable(
	'progress_pictures',
	{
		id: uuid().primaryKey().defaultRandom(),
		userId: text('user_id')
			.notNull()
			.references(() => user.id),
		title: varchar({ length: 256 }),
		url: text().notNull(),
		mime_type: varchar('mime_type', { length: 64 }),
		file_size: integer('file_size'),
		width: integer(),
		height: integer(),
		uploaded_at: timestamp('uploaded_at').defaultNow(),
		created_at: timestamp('created_at').defaultNow()
	},
	(table) => [index('progress_picture_user_id_index').on(table.userId)]
);
