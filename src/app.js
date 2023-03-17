import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import path from 'path';

import routesProducts from './routes/products.routes';

const app = express();

// Settings
app.set('port', 4000);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middlewares
app.use(morgan('dev'));
app.use(cors({
  origin: '*'
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static(path.join(__dirname, 'public')));

//Routes API
app.use('/api/products', routesProducts);

export default app;