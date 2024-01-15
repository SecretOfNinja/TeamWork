import { config } from 'dotenv';
import FoodRecipe from '../models/foodrecipe.schema.js';

config();

const generateFoodRecipe = async (req, res) => {
    try {
        const { recognizedFood } = req.body;
        const { path } = req.file;

        const generatedRecipe = await generateRecipeWithChatGPT(recognizedFood);

        const foodRecipe = await FoodRecipe.create({
            recognizedFood,
            recipe: {
                title: generatedRecipe.title,
                ingredients: generatedRecipe.ingredients,
                instructions: generatedRecipe.instructions,
            },
            imageUrl: path,
        });

        res.status(200).json({
            success: true,
            message: 'Food recipe created successfully',
            foodRecipeId: foodRecipe._id,
            recognizedFood: foodRecipe.recognizedFood,
            recipe: foodRecipe.recipe,
            imageUrl: foodRecipe.imageUrl,
            createdAt: foodRecipe.createdAt,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal server error' });
    }
};

export default generateFoodRecipe;
