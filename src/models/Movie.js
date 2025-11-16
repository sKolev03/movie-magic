import { v4 as uuid} from 'uuid';

const movies = [
    {
        id: '81313c94-08e0-40bf-85bc-1e7cdeebbef9',
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

    static find(){
        return movies.slice();
    }

    get id() {
        return this._id;
    }
    
    save() {
        movies.push(this);
        
        return this;
    }
}