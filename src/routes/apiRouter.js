import express from 'express';
import { Motivation } from '../../db/models';

const apiRouter = express.Router();


apiRouter.post('/main/post', async (req, res) => {
  try {
    console.log(req.body)
    const newPost = await Motivation.create({ ...req.body, userId: req.session?.user?.id });
    return res.json(newPost);
  } catch (error) {
    console.log('ОШИБКА СОЗДАНИЯ');
    return res.sendStatus(500);
  }
})

// РУЧКА ДЛЯ УДАЛЕНИЯ
apiRouter.delete('/main/post/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Motivation.destroy({
      where: {
        id,
      },
    });
    return res.sendStatus(200);
  } catch (error) {
    console.log('ОШИБКА УДАЛЕНИЯ');
    return res.sendStatus(500);
  }
});

// РУЧКА НА РЕДАКТИРОВАНИЕ

apiRouter.patch('/main/post/:id', async (req, res) => {
  try {
    const { desc } = req.body;
  const { id } = req.params;
  await Motivation.update({ desc }, { where: { id } });
  const newPost = await Motivation.findByPk(id);
  console.log(newPost, '+++++++');
  res.json(newPost);
  } catch (error) {
    console.log('ОШИБКА РЕДАКТИРОВАНИЯ');
    return res.sendStatus(500);
  }
});
export default apiRouter;
