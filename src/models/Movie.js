import { v4 as uuid} from 'uuid';
import fs from 'fs/promises';

let dbSerialized = await fs.readFile('./src/db.json', { encoding: 'utf-8' });
let db = JSON.parse(dbSerialized); 
let movies = db.movies;

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
    
    async save() {
        movies.push(this);

        const dbSerialized = JSON.stringify(db, null, 2);

        await fs.writeFile('./src/db.json', dbSerialized);
        
        return this;
    }
}