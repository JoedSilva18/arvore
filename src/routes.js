import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => res.json({ message: 'Welcome to Omni CLI' }));

routes.get('/init', (req, res) => res.json({ message: 'Primeira rota' }));

export default routes;
