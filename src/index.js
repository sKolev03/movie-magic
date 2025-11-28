import express from 'express';
import handlebars from 'express-handlebars';

import mongoose from 'mongoose';

import routes from './routes.js';

const app = express();

// Setup Database
const url = 'mongodb://localhost:27017'; // ако localhost не работи -> 127.0.0.1

try {
    await mongoose.connect(url, {
        dbName: 'movie-magic',
    });

    console.log('Sucsessfully connected to DB!');
} catch (err) {
    console.error('Cannot connect to DB, ', err.message);
}

//Setup Handlebars
app.engine('hbs', handlebars.engine({
    extname: 'hbs',
    runtimeOptions: {
        allowProtoMethodsByDefault: false,
        allowProtoPropertiesByDefault: true
    }
}));

app.set('view engine', 'hbs');
app.set('views', 'src/views');

//Setup middlewares
app.use(express.static('src/public'));

//Parse URL-encoded bodies
app.use(express.urlencoded());

//Routes
app.use(routes);

//Start the server
app.listen(5000, () => console.log('Server is listening on http://localhost:5000'));
