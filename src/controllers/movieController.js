import { Router } from 'express';
import movieSrevice from '../services/movieSrevice.js';

const movieController = Router();

movieController.get('/create', (req, res) => {
    res.render('create');
});

movieController.post('/create', (req, res) => {
    const movieData = req.body;

    const movie = movieSrevice.create(movieData);

    res.redirect('/');
});

export default movieController;