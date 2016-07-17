import { Router } from 'express';

export default function(app) {
  const api = Router();

  api.get('/test', (req, res) => {
   res.send({
     success: true,
     message: 'You made it!',
   });
  });

  return api;
}
