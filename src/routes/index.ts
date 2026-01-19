import { Router, Request, Response } from 'express';

const router = Router();

router.get('/health', (req: Request, res: Response) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

router.get('/', (req: Request, res: Response) => {
    res.json({ message: 'Welcome to the API' });
});

export default router;
