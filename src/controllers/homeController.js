import { Router } from 'express';

import movieSrevice from '../services/movieSrevice.js';

const homeController = Router();

homeController.get('/', async (req, res) => {
    const movies = await movieSrevice.getAll(); // getAll(req.query);

    res.render('home', { movies });
});

homeController.get('/about', (req, res) => {
    res.render('about');
});

export default homeController;