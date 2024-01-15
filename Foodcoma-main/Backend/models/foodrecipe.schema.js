import mongoose from 'mongoose';

const foodRecipeSchema = new mongoose.Schema({
  recognizedFood: String,
  recipe: {
    title: String,
    ingredients: [String],
    instructions: String,
  },
  createdAt: { type: Date, default: Date.now },
});

const FoodRecipe = mongoose.model('FoodRecipe', foodRecipeSchema);

module.exports = FoodRecipe;
