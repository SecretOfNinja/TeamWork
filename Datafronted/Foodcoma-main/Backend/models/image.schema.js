import mongoose from 'mongoose';

const imageSchema = new mongoose.Schema({
    name: String,
    cuisine: String,
    ingredients: [String],
    servingTemperature: String,
    imageUrl: String,
    createdAt: { type: Date, default: Date.now },

    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
      }
});

const Image = mongoose.model('Image', imageSchema);

export default Image;
