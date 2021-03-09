import Router from 'express';

import catsRouter from './cats/cats.route';
import peopleRouter from './people/people.route';

const router = Router();

router.use('/cats', catsRouter);
router.use('/people', peopleRouter);

export default router;
