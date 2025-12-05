import { Router } from 'express';
import movieSrevice from '../services/movieSrevice.js';
import castService from '../services/castService.js';

const movieController = Router();

movieController.get('/create', (req, res) => {
    res.render('create');
});

movieController.post('/create', async (req, res) => {
    const movieData = req.body;

    await movieSrevice.create(movieData);

    res.redirect('/');
});

movieController.get('/:movieId/details', async (req, res) => {
    const movieId = req.params.movieId;
    const movie = await movieSrevice.getOneDetailed(movieId);
    // const movieCasts = await castService.getAll({ includes: movie.casts });

    // TODO prepare view data(temp solution)
    const ratingViewData = '&#x2605;'.repeat(Math.trunc(movie.rating));

    res.render('details', { movie, rating: ratingViewData });
});

movieController.get('/search', async (req, res) => {
    const filter = req.query;

    const movies = await movieSrevice.getAll(filter);

    res.render('search', { movies, filter, pageTitle: 'Search Movies' });
});

movieController.get('/:movieId/attach', async (req, res) => {
    const movieId = req.params.movieId;

    const movie = await movieSrevice.getOne(movieId);
    const casts = await castService.getAll();

    res.render('casts/attach', { movie, casts });
});

movieController.post('/:movieId/attach', async (req, res) => {
    const movieId = req.params.movieId;
    const castId = req.body.cast;

    await movieSrevice.attach(movieId, castId);

    res.redirect(`/movies/${movieId}/details`);
});

export default movieController;