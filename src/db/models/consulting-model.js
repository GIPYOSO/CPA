import { model } from 'mongoose';
import { consultingSchema } from '../schemas/consulting-schema';

const Consulting = model('consulting', consultingSchema);

export class ConsultingModel {
	async counsulting(data) {
		console.log(data);
		const NewConsulting = await Consulting.create(data);
		return NewConsulting;
	}
}

const consultingModel = new ConsultingModel();

export { consultingModel };
