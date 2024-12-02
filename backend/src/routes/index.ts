import { Router } from 'express';
import { problemRouter } from './problems';


const router = Router();


router.use('/problems', problemRouter);


export { router as appRouter };