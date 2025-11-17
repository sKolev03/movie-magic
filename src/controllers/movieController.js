import { Router } from 'express';
import movieSrevice from '../services/movieSrevice.js';

const movieController = Router();

movieController.get('/create', (req, res) => {
    res.render('create');
});

movieController.post('/create', (req, res) => {
    const movieData = req.body;

    movieSrevice.create(movieData);

    res.redirect('/');
});

movieController.get('/:movieId/details', (req, res) => {
    const movieId = req.params.movieId;
    const movie = movieSrevice.getOne(movieId);

    console.log(movie);

    res.render('details', { movie });
});

export default movieController;