import JWT from 'jsonwebtoken';
import { config } from 'dotenv';

import User from '../models/User.js';

const { sign } = JWT;
config();

export const login = async (req, res) => {
  try {
    const { userNumber, password, type } = req.body;
    const user = await User.findOne({ where: { userNumber, password, type } });
    if (!user) return res.status(404).json({ message: 'User not found!' });
    const token = sign({ user }, process.env.JWT_SECRET, { expiresIn: '1h' });
  } catch (error) {
    return res.status(500).json(error);
  }
};
