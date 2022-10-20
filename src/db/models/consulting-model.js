import { model } from 'mongoose';
import { consultingSchema } from '../schemas/consulting-schema';

const Consulting = model('consulting', consultingSchema);

export class ConsultingModel {
	async create(category_info) {
		const createdNewUser = await Category.create(category_info);
		return createdNewUser;
	}

	async findAll() {
		const categorys = await Category.find({});
		return categorys;
	}

	async findOne(Bcategory) {
		const Onecategory = await Category.findOne({ name: Bcategory });
		return Onecategory;
	}
}

const consultingModel = new ConsultingModel();

export { consultingModel };
