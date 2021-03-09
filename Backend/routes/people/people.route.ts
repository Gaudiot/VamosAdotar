import { Router, Request, Response } from 'express';

const peopleRouter = Router();

peopleRouter.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Isso é o GET de PESSOAS' });
});

peopleRouter.post('/', (req: Request, res: Response) => {
  res.json({ message: 'Isso é o POST de PESSOAS' });
});

peopleRouter.put('/', (req: Request, res: Response) => {
  res.json({ message: 'Isso é o PUT de PESSOAS' });
});

peopleRouter.delete('/', (req: Request, res: Response) => {
  res.json({ message: 'Isso é o DELETE de PESSOAS' });
});

export default peopleRouter;
