import { Schema, model } from "mongoose";

const movieSchema = new Schema({ // Schema -> Function Contructor/Class
    title: String,
    category: String,
    genre: String,
    director: String,
    year: Number,
    imageUrl: String,
    rating: Number,
    description: String
});

const Movie = model('Movie', movieSchema);

export default Movie;