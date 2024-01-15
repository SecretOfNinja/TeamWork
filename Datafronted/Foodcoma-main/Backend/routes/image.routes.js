// image.routes.js

import express from 'express';
import upload from '../utils/multer.js';
import uploadImage  from '../controllers/image.controller.js';
import { analyzeImage } from '../controllers/openai.controller.js';

const router = express.Router();

router.post('/upload',upload.single("image"), uploadImage);
router.post('/openai',upload.single("image"),analyzeImage);

export default router;
