import { pgTable, uuid, pgEnum, text } from 'drizzle-orm/pg-core';
import { foodTable } from './food';

export const microEnum = pgEnum('micros', [
	'Vitamin D',
	'Magnesium',
	'Zinc',
	'Iron',
	'Calcium',
	'Potassium',
	'Sodium',
	'Vitamin B12',
	'Vitamin B6',
	'Folate',
	'Vitamin C',
	'Vitamin A',
	'Vitamin E',
	'Vitamin K',
	'Iodine',
	'Selenium',
	'Copper',
	'Manganese',
	'Omega-3',
	'Chromium',
	'Creatine',
	'other'
]);

export const microTable = pgTable('micro', {
	id: uuid().primaryKey().defaultRandom(),
	foodId: uuid('food_id').references(() => foodTable.id),
	type: microEnum(),
	amount: text()
});
