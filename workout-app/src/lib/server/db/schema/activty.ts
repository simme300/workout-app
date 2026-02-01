import { pgTable, uuid, pgEnum } from 'drizzle-orm/pg-core';

export const activitEnum = pgEnum('activity', ['Weightlifting', 'walking']);

export const activityTable = pgTable('activity', {
	id: uuid(),
	name: activitEnum()
});
