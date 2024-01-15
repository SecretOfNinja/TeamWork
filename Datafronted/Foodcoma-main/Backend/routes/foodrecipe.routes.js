import express from 'express';
import upload from '../utils/multer.js'
import createFoodRecipeController from '../controllers/foodrecipe.controller.js';

const router = express.Router();

router.post('/create', upload.single('image'), async (req, res, next) => {
    try {
        await createFoodRecipeController(req, res);
    } catch (error) {
        next(error);
    }
});

export default router;
