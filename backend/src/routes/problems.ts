import { Router } from 'express';
import Problem from '../models/Problem';

const router = Router();

router.get('/', async (req, res) => {
    try {
        console.log("here")
        const problems = await Problem.find();
        res.status(200).json(problems);
    } catch (error) {
        console.error('Failed to fetch problems:', error);
        res.status(500).json({ error: 'Failed to fetch problems' });
    }
});

router.get('/:id', async (req, res) => {
    try {
        console.log("here")
        const {id}=req.params
        const problem = await Problem.findById(id);
        res.status(200).json(problem);
    } catch (error) {
        console.error('Failed to fetch problems:', error);
        res.status(500).json({ error: 'Failed to fetch problems' });
    }
});


export {router as problemRouter};
