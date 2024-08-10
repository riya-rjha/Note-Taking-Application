import { verify } from 'jsonwebtoken';
import 'dotenv/config.js'

const authMiddleware = (req, res, next) => {
  const token = req.header('Authorization').replace('Bearer ', '');
  try {
    const data = verify(token, process.env.JWT_secret);
    req.userId = data.userId;
    next();
  } catch {
    res.status(401).send({ error: 'Not authorized' });
  }
};

export default authMiddleware;
