const express = require('express');
const cors = require('cors');
const app = express();

const { mongoose } = require('./database');

//Settings
app.set('port', process.env.PORT || 9443);

//Middlewares
app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());

//Routes
app.use('/api/proyecto', require('./routes/proyecto.routes'));

//Starting the server
app.listen(app.get('port'), () => {
    console.log('Servidor corriendo en el puerto', app.get('port'));
});