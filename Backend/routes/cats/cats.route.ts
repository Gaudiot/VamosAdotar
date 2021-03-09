import { Router, Request, Response } from 'express';

const catsRouter = Router();

catsRouter.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Isso é o GET de GATOS' });
});

catsRouter.post('/', (req: Request, res: Response) => {
  res.json({ message: 'Isso é o POST de GATOS' });
});

catsRouter.put('/', (req: Request, res: Response) => {
  res.json({ message: 'Isso é o PUT de GATOS' });
});

catsRouter.delete('/', (req: Request, res: Response) => {
  res.json({ message: 'Isso é o DELETE de GATOS' });
});

export default catsRouter;
