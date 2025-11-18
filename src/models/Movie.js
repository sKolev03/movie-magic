import { v4 as uuid} from 'uuid';

const movies = [
    {
        _id: '81313c94-08e0-40bf-85bc-1e7cdeebbef9',
        title: 'Avengers: Endgame',
        category: ',movie',
        genre: 'Superhero',
        director: 'Anthony Russo, Joe Russo',
        year: '2019',
        imageUrl: 'https://m.media-amazon.com/images/I/81ExhpBEbHL._AC_SY679_.jpg',
        rating: 8.4,
        description: 'After the devastating events of Avengers: Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos\' actions and restore balance to the universe.'
    }
];

export default class Movie {
    constructor(data){
        Object.assign(this, data);

        this._id = uuid();
    }

    static find(filter = {}){ // --- връща масив
        let result = movies.slice();

        if (filter._id) {
            result = movies.filter(movie => movie._id === filter._id)
        }

        if (filter.title) {
            // TODO Search by title, partial match, case insensitive
            result = result.filter(movie => movie.title.toLowerCase().includes(filter.title.toLowerCase()));
        }

        if (filter.genre) {
            // TODO Search by genre, exact match, casse insensitive
            result = result.filter(movie => movie.genre.toLowerCase() === filter.genre.toLowerCase());
        }

        if (filter.year) {
            // TODO Search by year, exact match
            result = result.filter(movie => movie.year === filter.year);
        }

        return result;
    }

    static findOne(filter = {}) { // --- връща обект
        let result = movies[0];

        if (filter._id) {
            result = movies.find(movie => movie._id === filter._id)
        }

        return result;
    }

    get id() {
        return this._id;
    }
    
    save() {
        movies.push(this);
        
        return this;
    }
}