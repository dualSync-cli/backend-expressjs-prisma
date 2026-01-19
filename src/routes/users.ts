import { Router, Request, Response, NextFunction } from 'express';
import prisma from '../lib/prisma';

const router = Router();

// GET all users
router.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const users = await prisma.user.findMany();
        res.json(users);
    } catch (error) {
        next(error);
    }
});

// GET user by ID
router.get('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const user = await prisma.user.findUnique({
            where: { id: parseInt(id, 10) },
        });
        if (!user) {
            return res.status(404).json({ error: 'User not found' });
        }
        res.json(user);
    } catch (error) {
        next(error);
    }
});

// POST create user
router.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { email, name } = req.body;
        const user = await prisma.user.create({
            data: { email, name },
        });
        res.status(201).json(user);
    } catch (error) {
        next(error);
    }
});

// PUT update user
router.put('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        const { email, name } = req.body;
        const user = await prisma.user.update({
            where: { id: parseInt(id, 10) },
            data: { email, name },
        });
        res.json(user);
    } catch (error) {
        next(error);
    }
});

// DELETE user
router.delete('/:id', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.id as string;
        await prisma.user.delete({
            where: { id: parseInt(id, 10) },
        });
        res.status(204).send();
    } catch (error) {
        next(error);
    }
});

export default router;
