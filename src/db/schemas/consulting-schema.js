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
		select: {
			type: String,
			required: true,
		},
	},
	{
		collection: 'consulting',
		timestamps: true,
	},
);

export { consultingSchema };
