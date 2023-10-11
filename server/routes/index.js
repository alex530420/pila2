/* eslint-disable prettier/prettier */
import express from 'express';

const router = express.Router();

/* GET */
router.get('/', (req, res) => {
  res.render('index', { title: 'New Title', author: 'Alex' });
});

export default router;
