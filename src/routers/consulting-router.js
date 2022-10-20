import { Router } from 'express';
import { consultingService } from '../services';
const consultingRouter = Router();


// 로그인 api (아래는 /login 이지만, 실제로는 /api/login로 요청해야 함.)
consultingRouter.post('/consulting', async function (req, res, next) {
	try {
		const { name, phone, car, selects } = req.body;
		res.status(200).json(req.body);
	} catch (error) {
		next(error);
	}
});

export { consultingRouter };