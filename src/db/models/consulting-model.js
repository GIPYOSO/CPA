import { model } from 'mongoose';
import { consultingSchema } from '../schemas/consulting-schema';
import moment from 'moment';
require('moment-timezone');
moment.tz.setDefault("Asia/Seoul");


const Consulting = model('consulting', consultingSchema);

export class ConsultingModel {
	async counsulting(data) {
		const kr_curr = moment().format('YYYY-MM-DD HH:mm:ss')
		data = {
			...data,
			kr_time : kr_curr
		}
		console.log(data)
		const NewConsulting = await Consulting.create(data);
		return NewConsulting;
	}
	async counsultings() {
		const NewConsulting = await Consulting.find({});
		return NewConsulting;
	}
	
}

const consultingModel = new ConsultingModel();

export { consultingModel };
