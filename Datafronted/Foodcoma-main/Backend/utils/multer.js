// multer.js

import multer from 'multer';
import { CloudinaryStorage } from 'multer-storage-cloudinary';  
import {v2 as cloudinary} from 'cloudinary';
import dotenv from 'dotenv';

dotenv.config();
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'samples',
        format: async (req, file) => 'png',
        public_id: (req, file) => new Date().toISOString(),
        // 'app-' + file.originalname.replace(/\./g, '-')
    },
});

const upload = multer({ storage: storage });




export default upload;
 