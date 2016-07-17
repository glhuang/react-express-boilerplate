import express from 'express';
import { template } from './helpers';
import api from '../api';

const app = express();

app.use('/build', express.static('build'));
app.use('/api', api(app));

app.get('/', (req, res) => {
  res.send(template())
})

app.listen(3000);
