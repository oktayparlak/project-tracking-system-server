/** Create */

import User from '../models/User.js';

/** Read */
export const getUser = async (req, res) => {
  try {
    const user = req.user;
    if (!user) return res.status(404).json({ message: 'User not found' });
    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json(error);
  }
};

export const getAllAcademicians = async (req, res) => {
  try {
    const users = await User.findAll({ where: { type: 'ACADEMICIAN' } });
    if (!users || users.length === 0) return res.status(404).json({ message: 'No academician found' });
    return res.status(200).json(users);
  } catch (error) {
    return res.status(500).json(error);
  }
};
