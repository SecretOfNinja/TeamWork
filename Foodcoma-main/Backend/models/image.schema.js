import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    name: String,
    cuisine: String,
    ingredients: [String],
    servingTemperature: String,
    imageUrl: String,
    createdAt: { type: Date, default: Date.now },
});

const Image = mongoose.model('Image', imageSchema);

module.exports = Image;
