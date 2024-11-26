import express from 'express';
import { Motivation } from '../../db/models';

const router = express.Router();


router.get('/main', async (req, res) => {
  try {
    const allPosts = await Motivation.findAll();
    const InitState = { allPosts };
    res.render('Layout', InitState);
  } catch(error) {
    console.log(error);
    return res.status(400).json({ message: 'ОШИБКА ГЛАВНОЙ' });
  }
})

router.get('/login', (req, res) => {
  res.render('Layout')
})
router.get('/', (req, res) => {
  res.render('Layout')
})

router.get('/registration', (req, res) => {
    res.render('Layout');
  }) 

  router.get('/post', (req, res) => {
    res.render('Layout');
    
  })
export default router;
