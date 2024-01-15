
import { config } from 'dotenv';
import Image from '../models/image.schema.js';

config();

const uploadImage = async (req, res) => {
    try {
        const { originalname, mimetype, size,path} = req.file;
      
        const image =await  Image.create({
            filename: req?.file?.originalname,
            originalname,
            mimetype,
            size,
            imageUrl:path,
        })
        // CALL OPEN API HERE RETURN THE IMAGE URL
        
        res.status(200).json({
            success: true,
            message: 'Image uploaded successfully',
            imageId: image._id,
            imageUrl:path,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export default uploadImage;
