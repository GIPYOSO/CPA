import { Schema } from 'mongoose';

const consultingSchema = new Schema(
	{
		name: {
			type: String,
			required: true,
		},
		phone: {
			type: String,
			required: true,
		},
		car: {
			type: String,
			required: true,
		},
		selects: {
			type: String,
			required: true,
		},
		ip: {
			type: String,
			required: false,
		},
	},
	{
		collection: 'consulting',
		timestamps: true,
	},
);

export { consultingSchema };
