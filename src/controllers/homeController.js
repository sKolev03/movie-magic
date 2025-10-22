import { Router } from 'express';
import movieSrevice from '../services/movieSrevice.js';

const homeController = Router();

homeController.get('/', (req, res) => {
    const movies = movieSrevice.getAll();

    res.render('home', { movies });
});

homeController.get('/about', (req, res) => {
    res.render('about');
});

export default homeController;