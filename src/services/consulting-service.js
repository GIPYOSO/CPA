import { consultingModel } from '../db';

class ConsultingService {
	// 본 파일의 맨 아래에서, new UserService(userModel) 하면, 이 함수의 인자로 전달됨
	constructor(consultingModel) {
		this.categoryModel = consultingModel;
	}

	async getCategory(categoryInfo) {
		// 카테고리 큰키워드 작은키워드 변수
		const { Bcategory, Scategory } = categoryInfo;
		// 큰 카테고리 옵젝아이디값 찾기
		const BigcategoryId = await this.categoryModel.findOne(Bcategory);
		// 카테고리 정보 객체화
		categoryInfo = {
			name: Scategory,
			bCategory: BigcategoryId._id,
		};

		return categoryInfo;
	}

	// 카테고리 목록을 받음.
	async getCategories() {
		const Bigcategory = await this.categoryModel.findAll();
		return Bigcategory;
	}
}

const consultingService = new ConsultingService(consultingModel);

export { consultingService };
