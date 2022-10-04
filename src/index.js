const express = require('express');
const morgan = require('morgan');

//Initializing
const app = express();

//Setting
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());

//Routes
app.use(require('./routes/index.routes'));

app.listen(app.get('port'), () => {
  console.log('servidor en el puerto ', app.get('port'));
});
