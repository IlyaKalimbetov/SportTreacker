import express from 'express';
import bcrypt from 'bcrypt';
import { User } from '../../db/models';

const authRouter = express.Router();

authRouter.post('/registration', async (req, res) => {
 try {
       const { userName, email, pass  } = req.body;
    console.log(req.body);
    if ( !userName || !email || !pass  ) {
        return res.status(400).json({ message: 'Заполните все поля' });
    }
    const hashpass = await bcrypt.hash(pass, 10);
    const user = await User.create({ userName, email, hashpass });
    req.session.user = { ...user.get(), hashpass: undefined };
    return res.sendStatus(200).end()
} catch(error) {
    console.log(error);
    return res.status(400).json({ message: 'ОШИБКА РЕГИСТРАЦИИ' });
}
})

authRouter.get('/login', (req, res) => {
    if(req.session?.user) {
    return res.json(req.session.user)
    }  
})

authRouter.post('/login', async (req, res) => {
    // console.log({reqbody: req.body})
   try { const { email, password } = req.body;
    const user1 = await User.findOne({ where: { email } });
    if (!user1) {
        return res.status(400).json({ message: 'Login not found' });
    }
    const isCorrect = await bcrypt.compare(password, user1.hashpass);
    if (!isCorrect) {
        return res.status(400).json({ message: 'Incorrect password' });
    }
    req.session.user = { ...user1.get(), hashpass: undefined };
    return res.sendStatus(200);
} catch(error) {
    console.log(error);
    return res.status(400).json({ message: 'ОШИБКА АВТОРИЗАЦИИ' });
}
});

authRouter.get('/logout', (req, res) =>{
    req.session.destroy()
    res.clearCookie('user_sid')
    res.sendStatus(200)
})

// authRouter.


export default authRouter;
