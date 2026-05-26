import express from 'express';
import 'dotenv/config';
import loginRouter from './routes/login.js';
import profileRouter from './routes/profile.js';

// CONSTANTES
const app = express();
const PORT = process.env.PORT;

// MIDDLEWARES
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MOTOR DE PLANTILLAS
app.set('view engine', 'pug');
app.set('views', './views');

// RUTAS
app.get('/', (req,res) =>{
    res.render('index');
})

app.use('/profile', profileRouter);

app.use('/login', loginRouter);

app.get('/register', (req,res) => {
    res.render('register');
})


// SERVIDOR
app.listen(PORT, () => {
    console.log(`Servidor en puerto ${PORT}`);
})